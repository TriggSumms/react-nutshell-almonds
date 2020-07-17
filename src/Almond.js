import React from 'react';
import NavBar from "./components/nav/NavBar"
import ApplicationViews from "./components/ApplicationViews"
import './Almond.css';

function Almond() {
  return (
    <div className="Almond">
      <header className="Almond-header">
      <h1>
          Nutshell 2: The Almonds Strike Back
        </h1>
        <div>
        <NavBar />
        <ApplicationViews />
        </div>
        <img src= "https://camo.githubusercontent.com/7d7ed75be5396d7084dae1423beb07158eabc9a2/68747470733a2f2f692e696d6775722e636f6d2f426531653463372e706e67" className="Almond-logo" alt="logo" />
        <a
          className="Almond-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Almond;
