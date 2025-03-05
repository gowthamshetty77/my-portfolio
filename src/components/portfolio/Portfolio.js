import React from "react";
import "./portfolio.css";
import ProjectCard from "./ProjectCard";

import newsSphereImg from "../../assests/project-newssphere.jpg";
import medicareImg from "../../assests/project-medicare.jpg";
import petHubImg from "../../assests/project-pethub.jpg";
import textUtilsImg from "../../assests/project-textUtils.png";
import udgamaImg from "../../assests/project-udgama.jpg";
import amazonImg from "../../assests/project-amazon.jpg";

function Portfolio() {
  let projectLists = [
    {
      img: newsSphereImg,
      projectTitle: "NewsSphere",
      projectDescription:
        "Dynamic web app leveraging NewsAPI for real-time news aggregation across diverse categories. Features responsive layout, interactive elements, and cross-device compatibility, delivering a user-centric platform for staying informed with latest global updates.",
      projectLink: process.env.REACT_APP_PORTFOLIO_NEWSSPHERE,
    },
    {
      img: medicareImg,
      projectTitle: "Medicare",
      projectDescription:
        "It is a web-based healthcare management system where patients can book appointments doctors can view patient and appointment lists, and receptionists manage all activities. The receptionist handles appointment approvals, doctor additions, and ensures smooth operation.",
      projectLink: process.env.REACT_APP_PORTFOLIO_MEDICARE,
    },
    {
      img: petHubImg,
      projectTitle: "PetHub",
      projectDescription:
        "This platform facilitates users in booking pet products such as food and accessories, as well as scheduling appointments for veterinary check-ups. Admins can manage product listings, view user bookings, and access reviews to enhance service quality for pets and browsing products",
      projectLink: process.env.REACT_APP_PORTFOLIO_PETHUB,
    },
    {
      img: textUtilsImg,
      projectTitle: "TextUtils",
      projectDescription:
        "React.js-powered text processing tool offering case conversion, copy/clear functions, word/character counting, and live preview. Features Bootstrap-styled interface for efficient text manipulation , readability enhancement and can estimate the time required to read a text",
      projectLink: process.env.REACT_APP_PORTFOLIO_TEXTUTILS,
    },
    {
      img: udgamaImg,
      projectTitle: "Udgama",
      projectDescription:
        "Dynamic platform connecting job seekers with diverse opportunities and empowering recruiters to post listings/hire talent. Streamlines employment matching while bridging candidate-employer needs for efficient hiring processes. Bridges job seekers and employers by enabling role.",
      projectLink: process.env.REACT_APP_PORTFOLIO_UDGAMA,
    },
    {
      img: amazonImg,
      projectTitle: "Amazon Clone",
      projectDescription:
        "Interactive e-commerce interface replicating product browsing, cart management, and checkout workflows. Features responsive design, user authentication, and dynamic search for seamless shopping experiences. Mirroring real-world retail functionality while prioritizing visual consistency.",
      projectLink: process.env.REACT_APP_PORTFOLIO_AMAZON,
    },
  ];

  return (
    <section id="portfolio">
      <div className="portfolio-section">
        <h1>Portfolio</h1>
        <p>
          Exploring innovative solutions through a diverse range of projects,
          from dynamic web applications to robust enterprise systems. Each
          project showcases my ability to integrate cutting-edge technologies
          with creative problem-solving.
        </p>
        <div className="portfolio-container">
          {projectLists.map((projectCard, index) => {
            return <ProjectCard key={index} {...projectCard} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
