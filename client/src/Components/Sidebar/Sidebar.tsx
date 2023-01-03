import React from "react";
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
          <a href={route.path}>{route.name}</a>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
