import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import the CSS file for styling

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/webseries">Webseries</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/tvshows">TV Shows</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
// This makes the file a module
export {};
