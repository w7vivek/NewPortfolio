import React, { useEffect, useRef } from "react";
import "./Project_tarin_certi.css";   // ✅ fixed name
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
            {/* BACK BUTTON */}
            <button className="back-btn" onClick={() => navigate('/home-page')}>
                ← Back
            </button>
            
            <h2>Projects</h2>

            {/* 🔥 HERO PROJECT */}
            <div className="project-card">
                <img src={rrImg} alt="AI Resume Generator" />

                <div className="card-overlay">
                    <h3>R.R Stationery</h3>
                    <span>MERN Stack</span>
                </div>
            </div>
            <div className="grid-projects">

                {/* RR PROJECT */}
                <div className="project-card">
                    <img src={resumeImg} alt="R.R Stationery" />

                    <div className="card-overlay">
                        <h1>AI Resume Generator</h1>
                        <span>React • AI</span>
                        <p>
                            Resume builder with clean UI and intelligent formatting for professional results.
                        </p>
                    </div>
                </div>

                {/* MEDICARE */}
                <div className="project-card">
                    <img src={medicareImg} alt="Medicare Plus" />

                    <div className="card-overlay">
                        <h3>Medicare Plus</h3>
                        <span>Python • Django</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;