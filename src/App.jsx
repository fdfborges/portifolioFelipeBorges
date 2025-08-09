import { useRef, useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import './App.scss';
import ReactGA from "react-ga4";


function App() {
  ReactGA.initialize("G-21CHVKG7FN");
  ReactGA.send({ hitType: "pageview", page: "Pagina Incial", title: "Custom Title" });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
