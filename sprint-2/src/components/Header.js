import React from "react";
import Logo from "../assets/logo/Logo-brainflix.svg";
import ProfileImg from "../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../assets/icons/SVG/Icon-search.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="Site Logo" />
      </Link>
      <div className="header__content">
        <div className="header__content--search-container">
          <img
            className="header__content--search-container-icon"
            src={SearchIcon}
            alt="Search Icon"
          />
          <input
            className="header__content--search-container-input"
            placeholder="Search"
          ></input>
        </div>
        <nav className="header__content--nav">
          {/* todo: Link should be the commented link, but styles get fucked up so I'll have to change that. */}
          <Link to="/upload">
            <button className="header__content--nav-button">Upload</button>
          </Link>
          <img
            className="header__content--nav--headshot"
            src={ProfileImg}
            alt="Profile Headshot"
          />
        </nav>
      </div>
    </header>
  );
}
