import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Pagina1" element={<Pagina1 />} />
        <Route path="/Pagina2" element={<Pagina2 />} />
      </Routes>
    </Router>
  );
}

export default App;

