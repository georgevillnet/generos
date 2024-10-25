import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Tab, Tabs } from 'react-bootstrap';
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import MostrarGeneros from './views/MostrarGeneros';
import EditarGenero from './views/EditarGenero';
import CrearGenero from './views/CrearGenero';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MostrarGeneros />} />
        <Route path="/modificarGenero" element={<EditarGenero />} />
        <Route path="/crearGenero" element={<CrearGenero />} />
      </Routes>
    </>
  )
}

export default App
