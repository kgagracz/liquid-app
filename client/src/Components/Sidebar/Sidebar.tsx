import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import "./Sidebar.modules.scss";

const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <div className="logo">
      <h1>Liquid App</h1>
    </div>
    <ul className="nav">
      {routes.map((route) => (
        <li className="nav-item" key={route.name}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
