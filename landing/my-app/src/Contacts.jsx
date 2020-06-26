import React from "react";
import "./Contacts.css";

class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts_envelope">
        <h1 className="contacts_title">контакты</h1>
        <form className="contacts_form">
          <p className="consultation">записаться<br/>на консультацию</p>
          <input className="contacts_name" type="text" required placeholder="Имя"></input>
          <input className="contacts_phone" type="text" required placeholder="Телефон"></input>
          <button className="contacts_submit" type="submit"></button>
        </form>
      </div>
    )
  }
}

export default Contacts