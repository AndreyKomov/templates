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

        <div className="feedback_text10">
          <p className="text10">Иванова Мария, 27 лет</p>
          <p className="text10">директор рекламного агентства</p>
          <p className="text10">“Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. aliqua.”
           03/02/15</p>
        </div>
        
        <div className="feedback_text20">
          <p className="text20">Иванова Мария, 27 лет</p>
          <p className="text20">директор рекламного агентства</p>
          <p className="text20">“Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. aliqua.”
           03/02/15</p>
        </div>

        <div className="feedback_text30">
          <p className="text10">Иванова Мария, 27 лет</p>
          <p className="text10">директор рекламного агентства</p>
          <p className="text10">“Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. aliqua.”
           03/02/15</p>
        </div>

        <a href="#" className="more">ещё...</a>
      </div>
    )
  }
}

export default Feedback