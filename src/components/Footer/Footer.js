// components/Footer/Footer.js
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Back to Top Button */}
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>

        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col">
            <h3 className="footer-brand">
              <span className="brand-accent">G</span>owtham{" "}
              <span className="brand-accent">P</span>
            </h3>
            <p className="footer-about">
              Full-stack developer passionate about creating interactive web
              experiences and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-col">
            <h4 className="footer-title">Connect</h4>
            <div className="social-links">
              <a
                href={process.env.REACT_APP_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="social-icon" />
              </a>
              <a
                href={process.env.REACT_APP_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                href={process.env.REACT_APP_TWITTER}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-icon" />
              </a>
              <a
                href={process.env.REACT_APP_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gowtham. All rights reserved</p>
          <p>Built with React and Bootstrap</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
