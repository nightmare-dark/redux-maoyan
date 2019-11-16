import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Nav = props => {
  return (
    <div className="nav">
      <NavLink to="/movie/hot" activeClassName="active">
        正在热映
      </NavLink>
      <NavLink to="/movie/comming" activeClassName="active">
        即将上映
      </NavLink>
    </div>
  );
};

export default Nav;
