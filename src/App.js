import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/css/app.scss"
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Header from 'components/Header'
import GsapPage from 'views/GsapPage';
import Board from 'views/Board';

export default function App() {
  const [darkMode, setdarkMode] = useState(true);

  return (
    <div className={`wrap ${darkMode && "theme-dark"}`}>
      <Container className='h-100 d-flex flex-column'>
        <BrowserRouter>
          <Header darkMode={darkMode} setdarkMode={setdarkMode}></Header>
          <Routes>
            <Route path="/" element={<GsapPage/>} />
            <Route path="/board" element={<Board/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}
