import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import "assets/css/app.scss"
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);