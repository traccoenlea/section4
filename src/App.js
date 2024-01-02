import React, { useState } from "react";
import SwitchData from "./components/SwitchData";
import "animate.css";

function App() {
  const [page, setPage] = useState(0);

  const pages = [
    {
      id: 0,
      name: "Pourquoi ce site ?",
    },
    {
      id: 1,
      name: "Pourquoi vous devriez me recontacter ?",
    },
    {
      id: 2,
      name: "Raison #1",
    },
    {
      id: 3,
      name: "Raison #2",
    },
    {
      id: 4,
      name: "Raison #3",
    },
    {
      id: 5,
      name: "Raison #4",
    },
    {
      id: 6,
      name: "Qui suis-je ?",
    },
    {
      id: 7,
      name: "Où pouvez-vous me trouver ?",
    },
    {
      id: 8,
      name: "Quand pouvez-vous me contacter ?",
    },
  ];

  const handleBack = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page !== 8) {
      setPage(page + 1);
    }
  };

  return (
    <div className="appContainer">
      <div className="header">
        {page === 0 ? (
          <div className="backArrow"></div>
        ) : (
          <div className="backArrow" onClick={handleBack}>
            <i className="fa-solid fa-left-long"></i>
          </div>
        )}
        <div>
          {pages.map((p, i) =>
            p.id === page ? (
              <h1 key={i} className="title">
                {p.name}
              </h1>
            ) : (
              ""
            )
          )}
        </div>
        {page === 8 ? (
          <div className="nextArrow"></div>
        ) : (
          <div className="nextArrow" onClick={handleNext}>
            <i className="fa-solid fa-right-long"></i>
          </div>
        )}
      </div>
      <SwitchData page={page} />
    </div>
  );
}

export default App;
