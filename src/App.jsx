import { useRef, useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import './App.scss';

function App() {

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
