import View from "./View";
import Arrows from "./Arrows";
import ImageLocation from "./ImageLocation";
import SlideTracker from "./SlideTracker";

export default function TravelSpotContainer() {
  return (
    <div className="travelSpotContainer">
      <View />
      <Arrows />
      <ImageLocation />
      <SlideTracker />
    </div>
  );
}
