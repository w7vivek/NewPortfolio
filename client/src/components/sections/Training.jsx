import React, { useEffect, useRef } from "react";
import "./Project_tarin_certi.css";
import { useNavigate } from "react-router-dom";
import elevanceImg from "../../assets/elevance.png";
import mspImg from "../../assets/msp.png";

const Training = () => {
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

      <div className="section-title-wrap">
        <h2>Training</h2>
      </div>

      <div className="content">

        <div className="item">
          <div className="item-content">
            <div className="text">
              <span className="tech">Elevance Skills</span>
              <h3>Full Stack Web Development</h3>
              <p>
                Hands-on training with real-world projects including
                production-level applications and modern web technologies.
              </p>
            </div>
            <img src={elevanceImg} alt="Elevance Skills" />
          </div>
        </div>

        <div className="item">
          <div className="item-content">
            <div className="text">
              <span className="tech">MSP Concepts</span>
              <h3>Final Year Project – WorkforceHub</h3>
              <p>
                Developed a workforce management system focusing on employee
                tracking, attendance, and scheduling using full-stack technologies.
              </p>
            </div>
            <img src={mspImg} alt="MSP Concepts" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Training;