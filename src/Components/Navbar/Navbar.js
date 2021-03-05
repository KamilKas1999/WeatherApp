import React from "react";
import classes from "./Navbar.module.scss";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
const navbar = (props) => (
  <header>
    <div className={classes.Navbar}>
      <Logo />
      <Search />
    </div>
  </header>
);
export default navbar;
