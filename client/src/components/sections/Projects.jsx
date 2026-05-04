import React, { useEffect, useRef } from "react";
import "./Project_tarin_certi.css";
import { useNavigate } from "react-router-dom";
import rrImg from "../../assets/rr.png";
import medicareImg from "../../assets/medicare.png";
import resumeImg from "../../assets/ai-resume.png";

const Projects = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section">

      <button className="back-btn" onClick={() => navigate('/home-page')}>
        <span>← Back</span>
      </button>

      <div className="section-title-wrap">
        <h2>Projects</h2>
      </div>

      {/* HERO CARD */}
      <div className="project-card" style={{ height: '320px', marginBottom: '16px' }}>
        <img src={rrImg} alt="R.R Stationery" />
        <div className="card-overlay">
          <h1>R.R Stationery</h1>
          <span>MERN Stack</span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid-projects">

        <div className="project-card">
          <img src={resumeImg} alt="AI Resume Generator" />
          <div className="card-overlay">
            <h3>AI Resume Generator</h3>
            <span>React · AI</span>
            <p>Resume builder with intelligent formatting for professional results.</p>
          </div>
        </div>

        <div className="project-card">
          <img src={medicareImg} alt="Medicare Plus" />
          <div className="card-overlay">
            <h3>Medicare Plus</h3>
            <span>Python · Django</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;