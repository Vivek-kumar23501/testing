import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import HostelInfo from './components/HostelInfo'; 
import MessReduction from './components/MessReduction';
import MessAllotment from './components/AllotmentForm';
import MessReductionTracking from './components/MessReductionTracking';
import StudentProfile from './components/Studentprofile';


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Navbar />
        <div className="flex-grow-1 p-4">
          <Routes>
           <Route path="/" element={<HostelInfo />} />
            <Route path="/mess-reduction" element={<MessReduction />} />
            <Route path="/AllotmentForm" element={<MessAllotment />} />
            <Route path="/MessReductionTracking" element={<MessReductionTracking />} />
            <Route path="/Studentprofile" element={<StudentProfile/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
