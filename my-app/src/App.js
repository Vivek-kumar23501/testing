import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import MessReduction from './components/MessReduction';
import MessAllotment from './components/AllotmentForm';
import MessReductionTracking from './components/MessReductionTracking';


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Navbar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mess-reduction" element={<MessReduction />} />
            <Route path="/AllotmentForm" element={<MessAllotment />} />
            <Route path="/MessReductionTracking" element={<MessReductionTracking />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
