import React, { useEffect, useRef } from "react";
import "./Project_tarin_certi.css";
import meta from "../../assets/meta.png";
import hackathon from "../../assets/hackathon.png";

const Certificates = () => {
  const ref = useRef(null);

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
        <h2>Certificates</h2>
      </div>

      <div className="content">

        <div className="item">
          <div className="item-content">
            <div className="text">
              <span className="tech">Coursera</span>
              <h3>Meta Front-End Developer</h3>
              <p>
                Certification covering HTML, CSS, JavaScript, React, and modern
                frontend practices.
              </p>
            </div>
            <a
              href="https://www.coursera.org/account/accomplishments/verify/S4M3NM8C2Z9W"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={meta} alt="Meta Certificate" />
            </a>
          </div>
        </div>

        <div className="item">
          <div className="item-content">
            <div className="text">
              <span className="tech">DA-IICT</span>
              <h3>Dhirubhai Ambani Hackathon</h3>
              <p>
                Participated in a national-level hackathon focusing on problem
                solving, teamwork, and rapid development under time constraints.
              </p>
            </div>
            <img src={hackathon} alt="Hackathon Certificate" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;