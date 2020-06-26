import React from "react";
import Footerimg from "./img/footer_img.png";
import Phonebutton from "./img/border_path.png";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer_envelope">
        <img className="footer_img" src={Footerimg} alt="footer_img.png" />

        <div className="phone_button">
          <img className="phone_frame" src={Phonebutton} alt="border_path.png" />
          <p className="footer_phone_number">8 (495) 555-65-44</p>
          <p className="footer_callback">обратный
          <br />звонок
          </p>
        </div>

        <div className="footer_email">
          <p className="footer_email_first">mail1@bargain.com</p>
          <p className="footer_email_second">mail2@bargain.com</p>
        </div>
      </div>
    )
  }
}

export default Footer