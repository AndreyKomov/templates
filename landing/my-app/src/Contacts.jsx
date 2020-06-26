import React from "react";
import Adres from "./img/adres_block.png";
import Map from "./img/map.png";
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
          <img className="addres" src={Adres} alt="adres_block.png" />
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