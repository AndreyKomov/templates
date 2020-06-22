import React from 'react';
import './App.css';
import Header from './Header';
import Offer from './Offer';
import Persefona from './Persefona';
import Services from './Services';


function App() {
  return (
    <div className="App">
      {/* <Persefona className="persefona"></Persefona> */}
      <Header></Header>
      <Offer></Offer>
      <Services></Services>
    </div>
  );
}

export default App;


