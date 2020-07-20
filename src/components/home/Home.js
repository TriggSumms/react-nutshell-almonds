import React from "react";
import "./Home.css";

const Home = props => {
  return (
    <>

      <div>
        <h1>Welcome to Nutshell!</h1>

        <div className="friend__Container">
        </div>
      </div>


      <div>
        {/* <h2>Chat/Messaging Windows </h2> */}
        <div className="chat___Container"></div>
        <section className="constructedMessage__Container"></section>
      {/* <button onClick={refreshPageAfterMessage}>Reload &#x27f3;</button> */}
      </div>
    </>
  )
};

export default Home;