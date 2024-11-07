import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import "./Navbar.css";
import logo2 from "../assets/logo2.png";
import pdf from "../assets/1.pdf";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Simulate loading when the component mounts or a page changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // Loading lasts 1.5s

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isOpen1, setIsOpen1] = useState(false);
  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggleDropdown3 = () => setIsOpen3(!isOpen3);
  const [isOpen4, setIsOpen4] = useState(false);
  const toggleDropdown4 = () => setIsOpen4(!isOpen4);

  return (
    <nav className={`navbar ${isHomePage ? 'navbar-shadow' : ''}`}>
      <div className="logo_title_div">
      <div className="nav-logo">
        <a href="/">
          <img src={logo2} alt="Logo" className="logo2" />
        </a>
      </div>
      <Link to="/" className="title">
           PICS
      </Link>
      </div>    
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <div className="nav-item">
            <a to="/About" className="dropdown-toggle" onMouseEnter={toggleDropdown1} onClick={toggleDropdown1}>About
            <span className={`arrow ${isOpen1 ? 'open' : ''}`}>&#9662;</span>
          </a>
          {isOpen1 && (
            <div className="dropdown">
              <NavLink className="dropdown-btn" to="/Committees">Committees</NavLink>
              <NavLink className="dropdown-btn" to="/History">History</NavLink>
              <NavLink className="dropdown-btn" to="/Papers">Call for Papers</NavLink>
            </div>
          )}
          </div>
        </li>
        <li>
          <div className="nav-item">
            <a to="/program" className="dropdown-toggle" onMouseEnter={toggleDropdown2} onClick={toggleDropdown2}>Program
            <span className={`arrow ${isOpen2 ? 'open' : ''}`}>&#9662;</span>
            </a>
            {isOpen2 && (
              <div className="dropdown">   
              <NavLink className="dropdown-btn" to="/Author">Author Information</NavLink>
              <NavLink className="dropdown-btn" to="/Workshops">Workshops</NavLink>
            </div>
            )}
          </div>
        </li>
        <li>
          <div className="nav-item">
            <a to="/Students"  className="dropdown-toggle" onMouseEnter={toggleDropdown3} onClick={toggleDropdown3}>Students
            <span className={`arrow ${isOpen3 ? 'open' : ''}`}>&#9662;</span>
            </a>
            {isOpen3 && (
              <div className="dropdown">   
              <NavLink to="/FacultyMeet" className="dropdown-btn">Meet the Faculty Candidates Poster Session</NavLink>
              <NavLink to="/StudentInfo" className="dropdown-btn">Student Information</NavLink>
            </div>
            )}
          </div>
        </li>
        <li>
          <div className="nav-item">
            <a to="/Travel"   className="dropdown-toggle" onMouseEnter={toggleDropdown4} onClick={toggleDropdown4}>Travel and Venue
            <span className={`arrow ${isOpen4 ? 'open' : ''}`}>&#9662;</span>
            </a>
            {isOpen4 && (
              <div className="dropdown">   
              <NavLink to="/AboutNITH" className="dropdown-btn">About NIT-H</NavLink>
              <NavLink to="/Accommodations" className="dropdown-btn">Accommodations</NavLink>
              <NavLink to="/ReachNITH" className="dropdown-btn">How to Reach NIT-H</NavLink>
              <NavLink to="/ConferenceVenue" className="dropdown-btn">The Conference Venue</NavLink>
            </div>
            )}
          </div>
        </li>
        <li>
          <a href={pdf}>Sponsors and Exhibitor
          <span style={{ color: 'black' }}>&#128279;</span>
          </a>
        </li>
      </ul>
      {loading && <div className="loading-line"></div>}
    </nav>
  );
};




{/* <svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="#2d2d35"
width="24"
height="24"
className="hellosvg"
>
<path
fillRule="evenodd"
d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
clipRule="evenodd"
/>
</svg> */}

