import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/chart" activeStyle={activeStyle}>
        Dashboard
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        Search
      </NavLink>
    </nav>
  );
};

export default Header;
