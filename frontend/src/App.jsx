import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from './Navbar';
import Valasztottagazat from './pages/Valasztottagazat';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Valasztottagazat/:id" element={<Valasztottagazat />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
