import React, { Component } from 'react';
import navbar from './component/navbar.js';
import Home from './component/Home.js';
import About from './component/About.js';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Contact from './component/Contact.js';

class App extends Component {
  render() {
    return (
       <Router>
        <navbar/>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>    
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>     
       </Router>
   );
  }
}

export default App;
