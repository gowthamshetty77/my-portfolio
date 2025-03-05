import React from "react";
import "./portfolio.css";

function ProjectCard({ img, projectTitle, projectDescription, projectLink }) {
  return (
    <div className="projectCard">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{projectTitle}</h3>
        <p className="card-text">{projectDescription}</p>
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="btn link-btn"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
