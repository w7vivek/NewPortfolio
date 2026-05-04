import React, { useEffect, useRef } from "react";
import "./About.css";
import profile2 from "../../assets/hero2.jpeg";

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        {/* LEFT */}
        <div className="about-text left">
          <p>
            I am Vivek Wadhwani, a Full Stack Developer specializing in MERN
            Stack and Django. I build scalable applications with clean UI.
          </p>

          <p>
            Passionate about performance, design, and real-world problem solving.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div className="about-image">
          <img src={profile2} alt="profile" />
        </div>

        {/* RIGHT */}
        <div className="about-text right">
          <p>
            I focus on modern web technologies and scalable architecture to
            deliver high-quality applications.
          </p>

          <button className="contact-btn">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;