import React from "react";
import "./NavBar.css";

const NavBar = props => {
  return (
      <nav>
        <ul className="container">
          <li className="nav-link">
           Home 
          </li>
          <li className="nav-link">
                 Articles 
              </li>
          
          <li className="nav-link">
             Events 
          </li>
                <li className="nav-link">
                 Tasks 
              </li>
        </ul>
      </nav>
  );
};

export default NavBar;