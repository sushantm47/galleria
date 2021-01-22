import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './components/Landingpage/LandingPage'

ReactDOM.render(
  <React.StrictMode>
    <LandingPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
