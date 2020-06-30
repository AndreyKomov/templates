import React from "react";
import Adres from "./img/adres_block.png";
// import Map from "./img/map.png";
// import Map from "./iframe.html";
import "./Contacts.css";

class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts_envelope">
        <h1 className="contacts_title">контакты</h1>
        <form className="contacts_form">
          <p className="consultation">записаться<br />на консультацию</p>
          <input className="contacts_name" type="text" required placeholder="Имя"></input>
          <input className="contacts_phone" type="text" required placeholder="Телефон"></input>
          <button className="contacts_submit" type="submit"></button>
        </form>

        <div className="contacts_text">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.3662421675995!2d37.46416499025237!3d55.665231177820175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54d98653265fb%3A0x149c247406d653bb!2z0YPQuy4g0J_QvtC60YDRi9GI0LrQuNC90LAsIDIzLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTE5NjAy!5e0!3m2!1sru!2sby!4v1593204518339!5m2!1sru!2sby"></iframe>

          {/* <img className="addres" src={Adres} alt="adres_block.png" /> */}
          <div className="adres_text">
            <p className="adress_text_first">8 (495) 675-55-66
              <br />mail@bargain.com
            </p>

            <p className="adress_text_second">г.Москва,
              <br />ул. Покрышкина, д.23
            </p>
          </div>
          <img className="map" src={Map} alt="map.png"/>
        </div>
      </div>
    )
  }
}

export default Contacts