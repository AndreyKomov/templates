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

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.3662421675995!2d37.46416499025237!3d55.665231177820175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54d98653265fb%3A0x149c247406d653bb!2z0YPQuy4g0J_QvtC60YDRi9GI0LrQuNC90LAsIDIzLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTE5NjAy!5e0!3m2!1sru!2sby!4v1593204518339!5m2!1sru!2sby"></iframe> */}

        {/* <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2398b0ae2fee7653c481e4d7ec5aa1c29c41500d4a18419363549a5e30f45efb&amp;width=710&amp;height=396&amp;lang=ru_RU&amp;scroll=true"></script> */}
      </div>
    )
  }
}

export default Footer