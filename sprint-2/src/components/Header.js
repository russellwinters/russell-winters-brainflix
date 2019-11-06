import React from "react";
import Logo from "../assets/logo/Logo-brainflix.svg";
import ProfileImg from "../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../assets/icons/SVG/Icon-search.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Site Logo" />
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
          <button className="header__content--nav-button">Upload</button>
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
