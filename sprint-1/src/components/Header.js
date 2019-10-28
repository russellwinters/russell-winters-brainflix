import React from "react";
import Logo from "../assets/logo/Logo-brainflix.svg";
import ProfileImg from "../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../assets/icons/SVG/Icon-search.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} />
      <div className="header__search-container">
        <img className="header__search-container--icon" src={SearchIcon} />
        <input
          className="header__search-container--input"
          placeholder="Search"
        ></input>
      </div>

      <nav className="header__nav">
        <button className="header__nav-button">+ Upload</button>
        <img className="header__nav--headshot" src={ProfileImg} />
      </nav>
    </header>
  );
}
