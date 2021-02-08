const ImageLocation = (props) => {
  let i = props.i;
    return (
      <div className="imgLocationContainer">
        <div className="imgLocation">
          <h1 className="imgLocationCity">
            {props.locations[i].city},
            {console.log(props.locations)}
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