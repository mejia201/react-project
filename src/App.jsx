import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Music from './Components/Music';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div>
        <Routes>
          <Route path="/music" element={<Music />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
