import React from "react";
import Background from "./img/back_shape.png";
import Work from "./img/we_work.png";
import "./Services.css";

class Services extends React.Component {
  render() {
    return(
      <div className="services">
        <header className="we_work">
          <img className="work" src={Work} alt="we_work.png"></img>
        </header>
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
          <p>уголовные дела</p>
          <p>арбитражные споры</p>
          <p>административные дела</p>
          <p>юридическое сопровождение организаций</p>
          <p>налоговые споры</p>
          <p>исполнительное производство</p>
          <p>профессиональный держатель реестра акционеров</p>
        </div>
      </div>
    )
  }
}

export default Services