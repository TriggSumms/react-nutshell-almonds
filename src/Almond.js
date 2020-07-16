import React from 'react';
import logo from './logo.svg';
import './Almond.css';

function Almond() {
  return (
    <div className="Almond">
      <header className="Almond-header">
      <h1>
          Nutshell 2: The Almonds Strike Back
        </h1>
        <img src={logo} className="Almond-logo" alt="logo" />
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
