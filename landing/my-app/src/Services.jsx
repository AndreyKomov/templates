import React from "react";
import Background from "./img/back_shape.png";
import Work from "./img/we_work.png";
import Button2 from "./img/button2.png";
import "./Services.css";

class Services extends React.Component {
  render() {
    return(
      <div className="services">
        <header className="we_work">
          <img className="work" src={Work} alt="we_work.png"></img>
        </header>
        <img className="button2" src={Button2} alt="button2.png"></img>
        <a href="#" className="register">записаться</a>
        <div className="register_text">
          <p>Запишитесь на консультацию</p>
          <p>со специалистом</p>
        </div>
        <ul className="title"><p>гражданские дела</p>
          <li>семейные</li>
          <li>жилищные</li>
          <li>земельные</li>
          <li>трудовые</li>
          <li>страховые</li>
          <li>наследственные</li>
          <li>авторские</li>
        </ul>
        <div className="list">
          <p><a href="#">уголовные дела</a></p>
          <p><a href="#">арбитражные споры</a></p>
          <p><a href="#">административные дела</a></p>
          <p><a href="#">юридическое сопровождение организаций</a></p>
          <p><a href="#">налоговые споры</a></p>
          <p><a href="#">исполнительное производство</a></p>
          <p><a href="#">профессиональный держатель реестра акционеров</a></p>
        </div>
      </div>
    )
  }
}

export default Services