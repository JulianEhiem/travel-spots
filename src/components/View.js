import style from '../styles/view.module.css';
const View = (props) => {
  return (
    <div className={style.viewContainer}>
      <div className={style.dropdownDiv}>
        <h1 className={style.viewType}>{props.views}</h1>
      </div>
    </div>
  );
};

export default View;
