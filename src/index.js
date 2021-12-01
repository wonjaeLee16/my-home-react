import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import App from './components/App';
import "assets/css/app.scss"
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <App />
    </Router>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);