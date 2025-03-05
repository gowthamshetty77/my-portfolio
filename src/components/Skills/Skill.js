import React from "react";
import "./Skills.css"; // For custom styles

function Skill({ logo, title }) {
  return (
    <div className="card">
      <img src={logo} className="card-img-top" alt="..." />
      <h5 className="card-title">{title}</h5>
    </div>
  );
}

export default Skill;
