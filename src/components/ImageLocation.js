const ImageLocation = (props) => {
    return (
      <div className="imgLocationContainer">
        <div className="imgLocation">
          <h1 className="imgLocationCity">
            {props.locations.city},
            <span className="imgLocationCountry"> {props.locations.country}</span>
          </h1>
        </div>
        <div className="imgLocationDescription">
          <p>{props.locations.description}</p>
        </div>
      </div>
    );
  };
  
  export default ImageLocation;