import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Clip clip!
        </p>
        <a
          className="App-link"
          href="https://www.safeway.com/justforu/coupons-deals.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Safeway
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fred Meyer
        </a>
      </header>
    </div>
  );
};

export default Popup;
