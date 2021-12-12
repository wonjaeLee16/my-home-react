import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/css/app.scss"
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from 'components/Header'
import GsapPage from 'views/GsapPage';
import { useState } from 'react';

export default function App() {
  const [darkMode, setdarkMode] = useState(true);

  return (
    <div className={`wrap ${darkMode && "theme-dark"}`}>
      <Container>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/gsap" element={<GsapPage/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}
