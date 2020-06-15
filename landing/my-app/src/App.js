import React from 'react';
import './App.css';
import Header from './Header';
import Offer from './Offer';
import Persefona from './Persefona';


function App() {
  return (
    <div className="App">
      <Persefona className="persefona"></Persefona>
      <Header></Header>
      <Offer></Offer>
    </div>
  );
}

export default App;


