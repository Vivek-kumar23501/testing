import React, { useState, useEffect, useRef } from 'react';
import {
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(null); // New state
  const sidebarRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleMenuClick = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // New: Button animation handler
  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
    setTimeout(() => setClickedButton(null), 300); // 300ms effect
  };

  return (
    <>
      {/* Mobile topbar */}
      {isMobile && (
        <div className="mobile-topbar d-flex justify-content-between align-items-center px-3 py-2">
          <Link to="/" className="navbar-brand text-dark fs-5 m-0">Student Dashboard</Link>
          <NavbarToggler onClick={toggleSidebar} className="custom-toggler" />
        </div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar ${isMobile ? 'mobile-sidebar' : ''} ${isSidebarOpen ? 'open' : ''}`}
      >
        <Nav vertical className="p-3">
          <Link to="/" className="navbar-brand text-primary fs-5 m-0"><b> Student Dashboard</b></Link>
          <br />
          <NavItem>
            <Link to="/" className="nav-link text-dark" onClick={handleMenuClick}>Student Profile</Link>
          </NavItem>
          <NavItem>
            <Link to="AllotmentForm" className="nav-link text-dark" onClick={handleMenuClick}>Hostel Allotment</Link>
          </NavItem>
          <NavItem>
            <Link to="/mess-reduction" className="nav-link text-dark" onClick={handleMenuClick}>Mess Reduction</Link>
          </NavItem>
          <NavItem>
            <Link to="/AllotmentForm" className="nav-link text-dark" onClick={handleMenuClick}>Mess Reduction Tracking</Link>
          </NavItem>
          <NavItem className="mt-auto">
            <Link to="/mess-calendar" className="nav-link text-dark" onClick={handleMenuClick}>Mess Calendar</Link>
          </NavItem>
          <NavItem className="mt-auto">
            <Link to="/grievance-support" className="nav-link text-dark" onClick={handleMenuClick}>Grievance Support</Link>
          </NavItem>
          <NavItem className="mt-auto">
            <Link to="/rules-regulation" className="nav-link text-dark" onClick={handleMenuClick}>Rules & Regulation</Link>
          </NavItem>
        </Nav>

        {/* Animated Buttons */}
        <Button
          color="primary"
          className={`sidebar-button ${clickedButton === 'contact' ? 'clicked' : ''}`}
          onClick={() => handleButtonClick('contact')}
          style={{
            marginLeft: '35px',
            marginTop: '50px',
            width: '140px',
          }}
        >
          Contact Us
        </Button>

        <div> </div>

        <Button
          color="danger"
          className={`sidebar-button ${clickedButton === 'logout' ? 'clicked' : ''}`}
          onClick={() => handleButtonClick('logout')}
          style={{
            marginTop: '50px',
            marginLeft: '35px',
            width: '140px',
          }}
        >
          Logout
        </Button>
      </div>

      {/* Overlay */}
      {isMobile && isSidebarOpen && (
        <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </>
  );
}

export default Navbar;
