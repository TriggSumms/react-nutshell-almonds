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
      </header>
    </div>
  );
}

export default Almond;
