import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  
  const handleClick = () => {
    chrome.storage.sync.set({routine: "stock_pick"});
    console.log("going to stock pick page")
    chrome.tabs.create({ url: 'https://www.cnbc.com/us-market-movers/' });
  }
  return (
    <div className="App">
      <button onClick={handleClick}>RUN</button>
    </div>
  );
};

export default Popup;
