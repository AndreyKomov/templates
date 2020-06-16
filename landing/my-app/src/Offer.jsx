import React from "react";
import Vline from "./img/line.png";
import Button from "./img/button.png";
import "./Offer.css";

class Offer extends React.Component {

  render() {
    return (
      <div>
        <div className="about_offer">
          <p className="law">юридичеcкие</p>
          <p className="law_second">услуги</p>
        </div>

        <img className="vertical_line" src={Vline} alt="vertical_line"></img>
        <div className="law_discription">
          <p className="discription_first">
            Юридическая фирма «Bargain» объединят высококвалифицированных юристов
            и адвокатов, без преувеличения, во все отраслях права.
          </p>
          <p className="discription_second">
            Наши специалисты внимательно следят за изменениями в российском законодательстве и всегда готовы помочь Вам
            в решении самых сложных задач.
          </p>
          <img className="confirm_button" src={Button} alt="button.png"></img>
          <a className="button_click" href="#">проконсультироваться бесплатно</a>
        </div>
      </div>

    )
  }
}


export default Offer