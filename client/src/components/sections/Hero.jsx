import React from "react";
import "./Hero.css";
import profile from "../../assets/hero.jpeg";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      {/* LEFT */}
      <div className="hero-left">
        <h3>Hi, I am</h3>
        <h1>Vivek Wadhwani</h1>

        <h2 className="role">Full Stack Developer</h2>

        {/* 🔥 Social Icons */}
        <div className="socials">

          <a
            href="https://www.instagram.com/_w_vivek/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/vivek-mahesh-kumar-wadhwani"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/w7vivek"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=wvivek.181@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>

          <a href="tel:+917041480579">
            <FaPhone />
          </a>

        </div>
        <button className="back-btn" onClick={() => navigate('/home-page')}>
          <span>← Back</span>
        </button>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Hero;