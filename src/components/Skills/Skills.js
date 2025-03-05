import React from "react";
import Marquee from "react-fast-marquee";
import Skill from "./Skill";
import "./Skills.css";

import reactIcon from "../../assests/react-img.png";
import springIcon from "../../assests/spring-img.png";
import J2EEIcon from "../../assests/j2ee-img.png";
import JDBCIcon from "../../assests/jdbc-img.png";
import jsIcon from "../../assests/js-img.png";
import cssIcon from "../../assests/css-img.png";
import htmlIcon from "../../assests/html-img.png";
import bootstrapIcon from "../../assests/bootstrap-img.png";
import mySQLIcon from "../../assests/mySql-img.png";
import gitIcon from "../../assests/git-img.png";
import githubIcon from "../../assests/gitHub-img.png";
import springSuitIcon from "../../assests/springSuite-img.png";
import eclipseIcon from "../../assests/eclipse-img.png";
import vsCode from "../../assests/vsCode-img.png";
import tomCatIcon from "../../assests/apacheTomcar-img.png";

function Skills() {
  let originalSkillsList_1 = [
    { logo: reactIcon, title: "React.js" },
    { logo: springIcon, title: "Spring" },
    { logo: J2EEIcon, title: "J2EE" },
    { logo: JDBCIcon, title: "JDBC" },
    { logo: jsIcon, title: "JavaScript" },
    { logo: cssIcon, title: "CSS" },
    { logo: htmlIcon, title: "HTML" },
    { logo: bootstrapIcon, title: "Bootstrap" },
  ];

  let originalSkillsList_2 = [
    { logo: mySQLIcon, title: "MySQL" },
    { logo: gitIcon, title: "Git" },
    { logo: githubIcon, title: "GitHub" },
    { logo: springSuitIcon, title: "Spring Suite" },
    { logo: eclipseIcon, title: "Eclipse" },
    { logo: vsCode, title: "VS Code" },
    { logo: tomCatIcon, title: "Tomcat" },
  ];

  // let skillsList_1 = [...originalSkillsList_1, ...originalSkillsList_1];
  // let skillsList_2 = [...originalSkillsList_2, ...originalSkillsList_2];

  return (
    <section id="skills">
      <div className="skills-section">
        <h1>Skills</h1>
        <p>
          A showcase of my technical expertise in various programming languages
          and tools.
        </p>
        <Marquee autoFill={true} pauseOnHover={true} speed={30}>
          <div className="skills-container">
            {originalSkillsList_1.map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
          </div>
        </Marquee>

        <Marquee autoFill={true} pauseOnHover={true} speed={30}>
          <div className="skills-container">
            {originalSkillsList_2.map((skill, index) => (
              <Skill key={index + originalSkillsList_2.length} {...skill} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
export default Skills;
