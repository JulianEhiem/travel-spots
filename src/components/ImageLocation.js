const ImageLocation = (props) => {
  let i = props.iterator;
    return (
      <div className="imgLocationContainer">
        <div className="imgLocation">
          <h1 className="imgLocationCity">
            {props.locations[i].city},
            <span className="imgLocationCountry"> {props.locations[i].country}</span>
          </h1>
        </div>
        <div className="imgLocationDescription">
          <p>{props.locations[i].description}</p>
        </div>
      </div>
    );
  };
  
  export default ImageLocation;