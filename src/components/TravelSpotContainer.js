import View from "./View";
import Arrows from "./Arrows";
import Image from "./Image";
import ImageLocation from "./ImageLocation";
import SlideTracker from "./SlideTracker";
import locations from "../locations"
import { useState } from "react";
import styles from "../index.css"


export default function TravelSpotContainer() {
// const [views, setViews] = useState('Mountains')
// const {styles.travelSpotContainer.background}
let iterator = 0;

  return (
    // <div className="travelSpotContainer" style={{background:`url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')fill no-repeat`}}>
    <div className="travelSpotContainer">
        <div className="bgImage"></div>
        <Image/>
        {/* <View views= { views }/> */}
        <Arrows />
        <ImageLocation locations = { locations }  i = {iterator}/>
      
     
    </div>
  );
}
