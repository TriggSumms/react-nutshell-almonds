import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  return (
      <nav>
        <ul className="container">
          <li className="nav-link">
              <Link className="nav-link" to="/home">
           Home 
           </Link>
          </li>
          <li className="nav-link">
          <Link className="nav-link" to="/articles">
                 Articles 
                 </Link>
              </li>
          
          <li className="nav-link">
          <Link className="nav-link" to="/events">
             Events 
             </Link>
          </li>
                <li className="nav-link">
                <Link className="nav-link" to="/tasks">
                 Tasks 
                 </Link>
              </li>
        </ul>
      </nav>
  );
};

export default NavBar;