import React from "react";
import Imagefirst from "./img/icon_1st.png";
import Imagesecond from "./img/icon_2nd.png";
import Imagethird from "./img/icon_3rd.png";
import Imagefourth from "./img/icon_4th.png";
import "./Advantages.css";



class Advantages extends React.Component {
  render() {
    return (
      <div className="advantages">
        <div className="advantages_text">
          <p>наши</p>
          <p>преимущества</p>
        </div>
        <div className="colum">
          <ul className="advantages_images">
            <li>
              <img className="img_1st" src={Imagefirst} alt="icon_1st.png"></img>
              <div className="img_text_1st"><p className="title_img">профессионализм</p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </li>

            <li>
              <img className="img_2nd" src={Imagesecond} alt="icon_2nd.png"></img>
              <p className="img_text_2nd"><p className="title_img">надежность</p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </li>

            <li>
              <img className="img_3rd" src={Imagethird} alt="icon_3rd.png"></img>
              <p className="img_text_3rd"><p className="title_img">сроки</p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </li>

            <li>
              <img className="img_4th" src={Imagefourth} alt="icon_4th.png"></img>
              <p className="img_text_4th"><p className="title_img">выгодная цена</p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Advantages