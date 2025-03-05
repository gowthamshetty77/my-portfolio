import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Gowtham</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
          I am a skilled Web Developer with experience in visually appealing and
          User-friendly Websites.
        </p>
        <a
          href={process.env.REACT_APP_LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Connect
        </a>
      </div>
    </section>
  );
}

export default Intro;
