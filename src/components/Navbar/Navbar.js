import React from "react";
import "./Navbar.css";
import Glogo from "../../assests/G.png";
import { FaEnvelope } from "react-icons/fa";
import MenuBar from "../../assests/menu-bar.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={Glogo}
            alt="Glogo"
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "50px",
              marginRight: "10px",
              objectFit: "cover",
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={MenuBar} alt="MenuBar" id="MenuBar" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item contactBtnNavLi">
              <a className="nav-link contactBtnNav" href="#contact">
                <FaEnvelope className="ContactBtnImgNav" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
