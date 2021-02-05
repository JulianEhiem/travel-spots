import { useState, useEffect } from "react";
import style from '../styles/view.module.css';
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
    <div className={style.viewContainer}>
      <div className={style.dropdownDiv}>
        <h1 className={style.viewType}>{view}</h1>
        <button className={style.ddBtn} onClick={activateDropdown}>
          <i class="fas fa-sort-down"></i>
        </button>
      </div>
      <div className={style.dropdownContent} id="dropdown">
        <a
          href="#"
          className= {style.dropdownContent}
          onClick={() => setView("Beaches")}
        >
          Beaches
        </a>
        <a
          href="#"
          className={style.dropdownContent}
          onClick={() => setView("Lakes")}
        >
          Lakes
        </a>
        <a
          href="#"
          className={style.dropdownContent}
          onClick={() => setView("Plains")}
        >
          Plains
        </a>
        <a
          href="#"
          className={style.dropdownContent}
          onClick={() => setView("Mountains")}
        >
          Mountains
        </a>
      </div>
    </div>
  );
};

export default View;
