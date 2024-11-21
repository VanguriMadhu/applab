import React, { useState } from "react";
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="container">
        <div>
          <nav id="home">
            <div className="nav-right-1">
              <a href="#"><img src="assets/AppLab.png" alt="logo" /></a>
            </div>
            <button className="icon" onClick={toggleMenu}>
              <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
            <div className={`nav-right ${isOpen ? 'open' : ''}`}>
              <ul>
                <li>
                  <a href="#home" onClick={closeMenu}>Home</a>
                </li>
                <li>
                  <a href="#features" onClick={closeMenu}>Key Features</a>
                </li>
                <li>
                  <a href="#pricing" onClick={closeMenu}>Pricing</a>
                </li>
                <li>
                  <a href="#terminal" onClick={closeMenu}>Testimonial</a>
                </li>
                <li>
                  <a href="#faq" onClick={closeMenu}>FAQ</a>
                </li>
                <li className="link-final-fix">
                  <a href="#" onClick={closeMenu}>Try for free</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
