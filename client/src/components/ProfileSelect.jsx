import React from "react";
import "./ProfileSelect.css";
import { useNavigate } from "react-router-dom";

import sidImg from "../assets/1.png";
import drunkImg from "../assets/2.png";
import trafficImg from "../assets/3.png";

const profiles = [
  { name: "About-Me", img: sidImg, path: "/about-me" },
  { name: "Explore SKills", img: drunkImg, path: "/skills" },
  { name: "Explore Project & all", img: trafficImg, path: "/explore" },
];

const ProfileSelect = () => {
  const navigate = useNavigate();

  const handleClick = (path, e) => {
    const card = e.currentTarget;
    card.classList.add("active");

    setTimeout(() => {
      navigate(path);
    }, 90);
  };

  return (
    <div className="container">
      <h1 className="logo">VIVEK WADHWANI</h1>

      <div className="profiles">
        {profiles.map((p, index) => (
          <div
            key={index}
            className="profile-card"
            onClick={(e) => handleClick(p.path, e)}
          >
            <img src={p.img} />
            <div className="overlay">
              <p>{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProfileSelect;