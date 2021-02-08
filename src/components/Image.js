const Image = (props) => {
  let locations = props.location;
  let iteratorCt = props.iterator;

  return (
    <div
      className="imageComp"
      style={{ background: `url(${locations[iteratorCt].imagelink})` }}
    ></div>
  );
};

export default Image;
