import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const TabBar = () => {
  const navs = [
    {
      id: 1,
      iconName: "fa-home",
      path: "/home",
      text: "电影"
    },
    {
      id: 2,
      iconName: "fa-church",
      path: "/cinema",
      text: "影院"
    },
    {
      id: 3,
      iconName: "fa-user-ninja",
      path: "/mine",
      text: "我的"
    }
  ];

  function renderNav() {
    return navs.map(item => (
      <li key={item.id}>
        <NavLink to={item.path} activeClassName="active">
          <i className={"fas " + item.iconName}></i>
          <span> {item.text} </span>
        </NavLink>
      </li>
    ));
  }
  return (
    <div className="foot">
      <ul>{renderNav()}</ul>
    </div>
  );
};

export default TabBar;
