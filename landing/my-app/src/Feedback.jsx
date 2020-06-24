import React from "react";
import Photo10 from "./img/photo_10.png";
import Photo20 from "./img/photo_20.png";
import Photo30 from "./img/photo_30.png";
import "./Feedback.css";

class Feedback extends React.Component {
  render () {
    return (
      <div className="feedback_content">
        <div className="photo">
        <img className="photo_10" src={Photo10} alt="photo10.png"></img>
        <img className="photo_20" src={Photo20} alt="photo20.png"></img>
        <img className="photo_30" src={Photo30} alt="photo30.png"></img>
        </div>
        
      </div>
    )
  }
}

export default Feedback