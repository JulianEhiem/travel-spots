import View from "./View";
// import Arrows from "./Arrows";
import Image from "./Image";
import ImageLocation from "./ImageLocation";
// import SlideTracker from "./SlideTracker";
import locations from "../locations";
import { useState } from "react";
// import styles from "../index.css";

export default function TravelSpotContainer() {
  const [iteratorCt, setIteratorCt] = useState(0);
  let iterator = locations.length;

  return (
    <div className="travelSpotContainer">
      <div
        className="bgImage"
        style={{ background: `url(${locations[iteratorCt].imagelink})center` }}
      ></div>
      <Image location={locations} iterator={iteratorCt} />
      <View location={locations} iterator={iteratorCt} />
      <ImageLocation locations={locations} iterator={iteratorCt} />
      <div className="arrowContainer">
        <div className="arrowLeft">
          <button
            onClick={() =>
              setIteratorCt(() => (iteratorCt - 1 > 0 ? iteratorCt - 1 : 0))
            }
          >
            <i class="fas fa-arrow-circle-left fa-2x"></i>
          </button>
        </div>
        <div className="arrowRight">
          <button
            onClick={() =>
              setIteratorCt(() =>
                iteratorCt + 1 < iterator - 1 ? iteratorCt + 1 : iterator - 1
              )
            }
          >
            <i class="fas fa-arrow-circle-right fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
