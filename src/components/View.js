import { useState, useEffect } from "react";
const View = () => {
  const activateDropdown = () => {
    const drop = document.querySelector("#dropdown");
    drop.classList.toggle("show");
  };
  const [view, setView] = useState("Mountains");

  useEffect(() => {
    activateDropdown();
  }, [view]);

  return (
    <div className="viewContainer">
      <div className="dropdownDiv">
        <h1 className="viewType">{view}</h1>
        <button className="ddBtn" onClick={activateDropdown}>
          <i class="fas fa-sort-down"></i>
        </button>
      </div>
      <div className="dropdownContent" id="dropdown">
        <a
          href="#"
          className="dropdownContent"
          onClick={() => setView("Beaches")}
        >
          Beaches
        </a>
        <a
          href="#"
          className="dropdownContent"
          onClick={() => setView("Lakes")}
        >
          Lakes
        </a>
        <a
          href="#"
          className="dropdownContent"
          onClick={() => setView("Plains")}
        >
          Plains
        </a>
        <a
          href="#"
          className="dropdownContent"
          onClick={() => setView("Mountains")}
        >
          Mountains
        </a>
      </div>
    </div>
  );
};

export default View;
