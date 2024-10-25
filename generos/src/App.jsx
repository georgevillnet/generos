import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Tab, Tabs } from 'react-bootstrap';
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import GenerosCard from './views/MostrarGeneros'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<GenerosCard />} />
        {/* <Route path="/mostrarNota" element={<ModificarNota />} />
        <Route path="/crearNota" element={<CrearNota />} /> */}
      </Routes>
    </>
  )
}

export default App
