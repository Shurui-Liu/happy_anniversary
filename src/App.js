import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OurYearPage from './pages/OurYearPage';
import May from './pages/May';
import Jun from './pages/Jun';
import Jul from './pages/Jul';
import Aug from './pages/Aug';
import Sep from './pages/Sep.jsx';
import Oct from './pages/Oct';
import Nov from './pages/Nov';
import Dec from './pages/Dec';
import Jan from './pages/Jan';
import Feb from './pages/Feb';
import Mar from './pages/Mar';
import Apr from './pages/Apr';

function App() {
  return (
        <Router>
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-year" element={<OurYearPage />} />
            <Route path="/our-year/May" element={<May />} />
            <Route path="/our-year/Jun" element={<Jun />} />
            <Route path="/our-year/Jul" element={<Jul />} />
            <Route path="/our-year/Aug" element={<Aug />} />
            <Route path="/our-year/Sep" element={<Sep />} />
            <Route path="/our-year/Oct" element={<Oct />} />
            <Route path="/our-year/Nov" element={<Nov />} />
            <Route path="/our-year/Dec" element={<Dec />} />
            <Route path="/our-year/Jan" element={<Jan />} />
            <Route path="/our-year/Feb" element={<Feb />} />
            <Route path="/our-year/Mar" element={<Mar />} />
            <Route path="/our-year/Apr" element={<Apr />} />
        </Routes>
    </div>
    </Router>
);
}

export default App;
