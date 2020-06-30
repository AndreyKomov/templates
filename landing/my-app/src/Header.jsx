import React from "react";
import Logo from "./img/logo.png";
import Path from "./img/border_path.png";
import Line from "./img/base_shape.png";
import "./Header.css";

class Header extends React.Component{
  state={

  }

  render() {
    return (
      <header className="header">
        <div className="feedback">
          <div className="phone">
          <img className="path" src={Path} alt="border_path"></img>
            <p className="phone_number">8 (495) 555-65-44</p>
          </div>
          <div className="callback">
            <p>обратный</p>
            <p>звонок</p>
            </div>
        </div>
        <img className="line" src={Line} alt="base_shape"></img>
        <nav className="menu">
          <a className="about_us" href="#">О нас</a>
          <a className="servises" href="#">услуги</a>
          <a className="comments" href="#">отзывы</a>
          <a className="contacts" href="#">контакты</a>
        </nav>
        <img className="logo" src={Logo} alt="logo"></img>
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2398b0ae2fee7653c481e4d7ec5aa1c29c41500d4a18419363549a5e30f45efb&amp;width=710&amp;height=396&amp;lang=ru_RU&amp;scroll=true"></script>
      </header>
    )
  }
}


export default Header