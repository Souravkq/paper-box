import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css'; // Keep this for icons
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './pages/Log_in'; // Import your Header component
import Signin from './pages/signin'
const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <Router>
    
      {/* Define the routes for different pages */}
      <Routes>
        {/* Default route for "/" */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default App;