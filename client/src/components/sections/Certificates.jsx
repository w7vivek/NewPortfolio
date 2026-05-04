import React, { useEffect, useRef } from "react";
import "./Project_tarin_certi.css";

/* images */
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
      <h2>Certificates</h2>

      <div className="content">

        {/* META CERTIFICATE */}
        <div className="item">
          <div className="item-content">
            <div className="text">
              <h3>Meta Front-End Developer</h3>
              <span className="tech">Coursera</span>
              <p>
                Certification covering HTML, CSS, JavaScript, React, and modern frontend practices.
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

        {/* HACKATHON */}
        <div className="item">
          <div className="item-content">
            <div className="text">
              <h3>Dhirubhai Ambani Hackathon</h3>
              <span className="tech">DA-IICT</span>
              <p>
                Participated in a national-level hackathon focusing on problem solving,
                teamwork, and rapid development under time constraints.
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