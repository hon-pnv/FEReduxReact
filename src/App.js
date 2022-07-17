// import './App.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./components/header.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Content from './components/content';
import About from './components/about';

class Pro extends Component{
  render(){
    return (
      <>
        <header>
          <a to="#" className="logo">
            <img src="https://1.bp.blogspot.com/-FSJpfNUfiwQ/YVmBlwUDTuI/AAAAAAAABA8/UJWwUNLmi8A-dbv_FAwXhnnOh93BsJiAgCLcBGAsYHQ/s320/logo2.png" />
            <h1>Shop-TUTUTU</h1>
          </a>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <img
              src="https://1.bp.blogspot.com/-TQ6sqw09POE/YVmBmHDNLtI/AAAAAAAABBE/h2kA7cyP42gurgfw1OttA8o6-9IFWvm7wCLcBGAsYHQ/s0/menu1.png"
              className="img1"
            />
            <img
              src="https://1.bp.blogspot.com/-7FrNzRkSTfA/YVmBmBWPd1I/AAAAAAAABBA/7ddyu0cIswgmBH3FCqUAuOnCU6Rq5bgbgCLcBGAsYHQ/s0/menu2.png"
              className="img2"
            />
          </label>
          <div className="links">
            <div>
              <Link to="/">Home</Link>
              <Link to="/Admin">Admin</Link>
              <Link to="/Content">Content</Link>
              <Link to="/About">About</Link>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/About" element={<About />} />
        </Routes>
  
      </>
    );
  }
}

export default Pro;
