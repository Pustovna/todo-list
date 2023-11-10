import React from "react";
import "./header.css";
import icon from "../../assest/user-icon.svg";
import Search from "./Search/Search";

const Header = () => {
  return (
    <div className="header-container">
      <Search></Search>
      <img src={icon}></img>
    </div>
  );
};

export default Header;
