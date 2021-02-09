const SlideTracker = (props) => {
  let location = props.locations;
  let i = props.num;
  return (
    <div className="bubbleDiv">
      {location.map((x, n) => (
        <div className={`${n === i ? "bubble lit" : "bubble"}`}></div>
      ))}
    </div>
  );
  };
  
  export default SlideTracker;
  