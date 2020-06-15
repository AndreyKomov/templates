import React from "react";
import Persef from "./img/persefona.png";
import "./Offer.css";

class Persefona extends React.Component {
  render() {
    return (
      <img className="persefona" src={Persef} alt="persefona.png"></img>
    )
  }
}

export default Persefona