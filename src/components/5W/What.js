import React from "react";
import "animate.css";

const What = () => {
  return (
    <div className="smallTxt ">
      <h2 className="animate__animated animate__slideInLeft animate__slower">
        Je veux être
      </h2>
      <h2 className="animate__animated animate__slideInRight animate__slower">
        <span className="accent">recrutée</span> chez
      </h2>
      <h2 className="animate__animated animate__slideInUp animate__slower">
        <a href="https://section4.fr/" target="__blank">
          <i>Section 4</i>
        </a>
      </h2>
    </div>
  );
};

export default What;
