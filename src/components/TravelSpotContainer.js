import View from "./View";
import Arrows from "./Arrows";
import ImageLocation from "./ImageLocation";
import SlideTracker from "./SlideTracker";
import locations from "../locations.json"


export default function TravelSpotContainer() {
  return (
    <div className="travelSpotContainer">
      <View />
      <Arrows />
      <ImageLocation locations= { locations } />
      <SlideTracker />
    </div>
  );
}
