import React from "react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-wrapper sticky-top">
      <div className="container navbar-container">
        <div className="row-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/map/tableau">Tableau Map<span className="description"></span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/map/gds">GDS Map<span className="description"></span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/modeling">Modeling</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/team">Team</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
