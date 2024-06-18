import React from 'react';
import './App.css';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import { Services } from './components/ServicePage'; // Ensure correct import

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
