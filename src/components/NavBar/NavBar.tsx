import { useState } from "react";
import "./NavBar.css";
import DarkMode from "../DarkMode/DarkMode";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar  ${isActive ? "collapsible--expanded" : ""}`}>
      <h1 className="brand-name">
        <Link to="/popular">MovieManiac</Link>
      </h1>

      <span className="icon-container" onClick={handleClick}>
        <svg
          id="light"
          enableBackground="new 0 0 24 24"
          fill="white"
          height="40"
          viewBox="0 0 24 24"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
          className="nav__toggler"
        >
          <g>
            <path d="m21.5 24h-19c-1.379 0-2.5-1.122-2.5-2.5v-19c0-1.378 1.121-2.5 2.5-2.5h19c1.379 0 2.5 1.122 2.5 2.5v19c0 1.378-1.121 2.5-2.5 2.5zm-19-23c-.827 0-1.5.673-1.5 1.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z" />
          </g>
          <g>
            <path d="m16.5 8h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z" />
          </g>
          <g>
            <path d="m16.5 12.5h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z" />
          </g>
          <g>
            <path d="m16.5 17h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z" />
          </g>
        </svg>
      </span>
      <ul className="collapsible__content nav__list">
        <DarkMode />
        <li className="list__item">
          <NavLink to="/latest">Latest 🥳</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/popular">Popular 🔥</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/top_rated">Top Rated ⭐</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
