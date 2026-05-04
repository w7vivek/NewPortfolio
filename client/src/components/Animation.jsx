import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { playIntro, stopIntro, startBgMusic } from "../audioManager"; // adjust path if needed

const Animation = () => {
  const navigate  = useNavigate();
  const [started, setStarted] = useState(false);

  const overlay   = useRef(null);
  const flash     = useRef(null);
  const v         = useRef(null);
  const main      = useRef(null);
  const vivek     = useRef(null);
  const left      = useRef(null);
  const replayBtn = useRef(null);

  /* ─── Web Animations API wrapper ─── */
  const anim = (el, frames, dur, delay = 0, ease = "ease") =>
    new Promise((res) => {
      setTimeout(() => {
        const a = el.animate(frames, { duration: dur, easing: ease, fill: "forwards" });
        a.onfinish = res;
      }, delay);
    });

  /* ─── Intro animation sequence ─── */
  const play = () => {
    if (!overlay.current) return;

    replayBtn.current.style.display = "none";
    overlay.current.style.display   = "flex";

    [flash, v, main, vivek, left].forEach((r) => {
      r.current.style.opacity = "0";
      r.current.getAnimations().forEach((a) => a.cancel());
    });

    // ✅ Play intro sound when V appears
    setTimeout(() => playIntro(), 300);

    anim(overlay.current, [{ opacity: 0 }, { opacity: 1 }], 300);
    anim(flash.current,   [{ opacity: 0.9 }, { opacity: 0 }], 250);

    anim(
      v.current,
      [
        { opacity: 0, transform: "scaleY(6) scaleX(1.6)", filter: "brightness(5)" },
        { opacity: 1, transform: "scaleY(1.06) scaleX(1.01)", filter: "brightness(2)", offset: 0.18 },
        { opacity: 1, transform: "scaleY(1) scaleX(1)", filter: "brightness(1)" },
      ],
      1000, 300, "cubic-bezier(0.25,0.46,0.45,0.94)"
    ).then(() =>
      anim(
        v.current,
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(0.05) translateY(-40px)", filter: "brightness(5)" },
        ],
        450, 0, "ease-in"
      ).then(() =>
        anim(main.current, [{ opacity: 0 }, { opacity: 1 }], 100).then(() => {
          anim(
            vivek.current,
            [
              { opacity: 0, transform: "scaleY(5) scaleX(1.4)", filter: "brightness(4)" },
              { opacity: 1, transform: "scaleY(1.05) scaleX(1.01)", filter: "brightness(1.6)", offset: 0.2 },
              { opacity: 1, transform: "scaleY(1) scaleX(1)", filter: "brightness(1)" },
            ],
            1000, 0, "cubic-bezier(0.25,0.46,0.45,0.94)"
          );

          setTimeout(() =>
            anim(
              left.current,
              [
                { opacity: 0, transform: "translateX(40px)" },
                { opacity: 1, transform: "translateX(0)" },
              ],
              700
            ), 450);

          setTimeout(() => {
            if (replayBtn.current) replayBtn.current.style.display = "block";
          }, 2400);
        })
      )
    );
  };

  /* ─── Start animation after user clicks (Chrome audio policy fix) ─── */
  useEffect(() => {
    if (started) play();
  }, [started]);

  /* ─── Visit button: stop intro → start bg music → navigate ─── */
  const handleSubmit = () => {
    stopIntro();       // ✅ Stop the intro sound
    startBgMusic();    // ✅ Start background music (loops across all pages)
    navigate("/home-page");
  };

  /* ─── "Click to Start" screen ─── */
  if (!started) {
    return (
      <div style={styles.startScreen} onClick={() => setStarted(true)}>
        <div style={styles.startContent}>
          <div style={styles.startV}>V</div>
          <p style={styles.startText}>Click anywhere to enter</p>
        </div>
      </div>
    );
  }

  /* ─── Main animation screen ─── */
  return (
    <div style={styles.body}>
      <div ref={overlay} style={styles.overlay}>
        <div ref={flash} style={styles.flash} />
        <div ref={v} style={styles.v}>V</div>

        <div ref={main} style={styles.main}>
          <div ref={left} style={styles.left}>
            <span style={styles.name}>Vivek Wadhwani</span>
            <span style={styles.role}>Full Stack Developer | MERN | Django</span>
          </div>
          <div style={styles.divider} />
          <div ref={vivek} style={styles.vivek}>VIVEK</div>
        </div>

        <button ref={replayBtn} style={styles.button} onClick={handleSubmit}>
          Visit
        </button>
      </div>
    </div>
  );
};

/* ─── Styles ─── */
const styles = {
  startScreen: {
    width: "100%",
    height: "100vh",
    background: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  startContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  startV: {
    fontSize: "15vw",
    fontWeight: "900",
    color: "#E50914",
    textShadow: "0 0 60px rgba(229,9,20,0.7)",
    lineHeight: 1,
  },
  startText: {
    color: "#aaa",
    fontSize: "1.1vw",
    letterSpacing: "6px",
    textTransform: "uppercase",
    margin: 0,
  },
  body: {
    width: "100%",
    height: "100vh",
    background: "#000",
    overflow: "hidden",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
  },
  flash: {
    position: "absolute",
    inset: 0,
    background: "#fff",
    opacity: 0,
  },
  v: {
    fontSize: "35vw",
    fontWeight: "900",
    color: "#E50914",
    position: "absolute",
    opacity: 0,
    textShadow: "0 0 80px rgba(229,9,20,0.9)",
  },
  main: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    opacity: 0,
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    opacity: 0,
  },
  name: {
    color: "#fff",
    fontWeight: "900",
    letterSpacing: "4px",
    fontSize: "2.5vw",
  },
  role: {
    color: "#aaa",
    fontSize: "1.2vw",
    letterSpacing: "3px",
  },
  divider: {
    width: "3px",
    height: "100px",
    background: "#E50914",
  },
  vivek: {
    fontSize: "12vw",
    fontWeight: "900",
    color: "#E50914",
    opacity: 0,
    textShadow: "0 0 50px rgba(229,9,20,0.7)",
  },
  button: {
    position: "absolute",
    bottom: "40px",
    right: "40px",
    width: "180px",
    height: "60px",
    fontSize: "16px",
    background: "#E50914",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    display: "none",
    letterSpacing: "1px",
  },
};

export default Animation;