import React from 'react';
import './App.css';
import Header from './Header';
import Offer from './Offer';
import Persefona from './Persefona';
import Services from './Services';
import Advantages from './Advantages';


function App() {
  return (
    <div className="App">
      {/* <Persefona className="persefona"></Persefona> */}
      <Header></Header>
      <Offer></Offer>
      <Services></Services>
      <Advantages></Advantages>
    </div>
  );
}

export default App;


