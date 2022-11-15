import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import classes from "./Header.module.css";
import { HeaderConstants, commonConstants } from "../../Constants/string.constant";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.left_container}>
        <a href="/">
          <img src={logo} alt="logo" style={{ width: "20px", height: "20px", paddingRight: "3px" }} />
        </a>
        <p>
          <Link to="/">{HeaderConstants.HackerNews}</Link>
        </p>
        <span className={classes.pipe}></span>
        <NavLink to="/new" activeclassname="active">
          {HeaderConstants.new}
        </NavLink>
        <span className={classes.pipe}>|</span>
        <NavLink to="/best" activeclassname="active">
          {HeaderConstants.best}
        </NavLink>
        {/* <span className={classes.pipe}>|</span>
        <NavLink to="/newcomments" activeclassname="active">
          {HeaderConstants.comments}
        </NavLink> */}
        <span className={classes.pipe}>|</span>
        <NavLink to="/ask" activeclassname="active">
          {HeaderConstants.ask}
        </NavLink>
        <span className={classes.pipe}>|</span>
        <NavLink to="/show" activeclassname="active">
          {HeaderConstants.show}
        </NavLink>
        <span className={classes.pipe}>|</span>
        <NavLink to="/job" activeclassname="active">
          {HeaderConstants.jobs}
        </NavLink>
      </div>
      <div className={classes["right-container"]}>
        <Link to="/login">{commonConstants.Login}</Link>
      </div>
    </header>
  );
}

export default Header;
