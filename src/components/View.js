import style from '../styles/view.module.css';
const View = () => {
  return (
    <div className={style.viewContainer}>
      <div className={style.dropdownDiv}>
        <h1 className={style.viewType}>Mountains</h1>
      </div>
    </div>
  );
};

export default View;
