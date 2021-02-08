import style from "../styles/view.module.css";

const View = (props) => {
  let i = props.iterator;
  return (
    <div className={style.viewContainer}>
      <div className={style.dropdownDiv}>
        <h1 className={style.viewType}>{props.location[i].name}</h1>
      </div>
    </div>
  );
};

export default View;
