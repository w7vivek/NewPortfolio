import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Skills.css";

const webSkills = [
  { name: "HTML",        level: 95 },
  { name: "CSS",         level: 90 },
  { name: "JavaScript",  level: 88 },
  { name: "Bootstrap",   level: 85 },
  { name: "Tailwind CSS",level: 87 },
  { name: "React.js",    level: 90 },
  { name: "Git & GitHub",level: 88 },
  { name: "MongoDB",     level: 82 },
  { name: "Node.js",     level: 85 },
  { name: "Express.js",  level: 83 },
];

const programmingSkills = [
  { name: "C++",             level: 80 },
  { name: "Java",            level: 78 },
  { name: "Python",          level: 85 },
  { name: "Data Structures", level: 82 },
  { name: "Algorithms",      level: 80 },
  { name: "OOP",             level: 88 },
  { name: "Django",          level: 78 },
  { name: "PHP",             level: 65 },
  { name: "AI / ML",         level: 70 },
];

const services = [
  { icon: "💻", title: "Web Development",  desc: "Building scalable, responsive, and high-performance web applications using modern technologies." },
  { icon: "⚙️", title: "Backend & APIs",   desc: "Designing secure backend systems with Node.js, Django, and REST APIs." },
  { icon: "🗄️", title: "Database Design", desc: "Structuring efficient databases using MongoDB and PostgreSQL." },
  { icon: "🎨", title: "UI / UX Design",   desc: "Creating clean, intuitive, and user-focused interface designs." },
];

/* ── Skill Bar ── */
const SkillBar = ({ name, level, index }) => {
  const barRef   = useRef(null);
  const fillRef  = useRef(null);
  const glowRef  = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setTimeout(() => setAnimated(true), index * 60);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [animated]);

  useEffect(() => {
    if (animated && fillRef.current && glowRef.current) {
      fillRef.current.style.width = `${level}%`;
      glowRef.current.style.width = `${level}%`;
    }
  }, [animated, level]);

  return (
    <div ref={barRef} className="skill-bar-row">
      <div className="skill-bar-label-row">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-level">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          ref={fillRef}
          className="skill-bar-fill"
          style={{ transitionDelay: `${index * 60}ms` }}
        />
        <div
          ref={glowRef}
          className="skill-bar-glow"
          style={{ transitionDelay: `${index * 60}ms` }}
        />
      </div>
    </div>
  );
};

/* ── Main Component ── */
const Skills = () => {
  const navigate = useNavigate();
  const heroRef  = useRef(null);
  const s1Ref    = useRef(null);
  const s2Ref    = useRef(null);
  const s3Ref    = useRef(null);

  useEffect(() => {
    const sections = [heroRef, s1Ref, s2Ref, s3Ref];
    const observers = sections.map((ref, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && ref.current) {
            setTimeout(() => {
              ref.current.classList.add("visible");
            }, i * 100);
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) obs.observe(ref.current);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="skills-page">

      {/* backgrounds */}
      <div className="skills-grid-bg" />
      <div className="skills-red-blob" />

      {/* back button */}
      <button className="skills-back-btn" onClick={() => navigate("/home-page")}>
        ← Back
      </button>

      {/* hero */}
      <div ref={heroRef} className="skills-fade-up skills-hero">
        <p className="skills-eyebrow">What I bring to the table</p>
        <h1 className="skills-hero-title">
          Skills &<br />
          <span className="skills-red">Expertise</span>
        </h1>
        <div className="skills-hero-divider" />
      </div>

      {/* 01 — What I Do */}
      <section ref={s1Ref} className="skills-fade-up skills-section">
        <h2 className="skills-section-title">
          <span className="skills-red">01.</span> What I Do
        </h2>
        <div className="skills-services-grid">
          {services.map((s, i) => (
            <div key={i} className="skills-card">
              <span className="skills-card-icon">{s.icon}</span>
              <h3 className="skills-card-title">{s.title}</h3>
              <p className="skills-card-desc">{s.desc}</p>
              <div className="skills-card-line" />
            </div>
          ))}
        </div>
      </section>

      {/* 02 — Web & Tools */}
      <section ref={s2Ref} className="skills-fade-up skills-section">
        <h2 className="skills-section-title">
          <span className="skills-red">02.</span> Web &amp; Tools
        </h2>
        <div className="skills-bars-grid">
          {webSkills.map((s, i) => (
            <SkillBar key={s.name} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* 03 — Programming */}
      <section ref={s3Ref} className="skills-fade-up skills-section">
        <h2 className="skills-section-title">
          <span className="skills-red">03.</span> Programming
        </h2>
        <div className="skills-bars-grid">
          {programmingSkills.map((s, i) => (
            <SkillBar key={s.name} {...s} index={i} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Skills;