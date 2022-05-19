import React, { Component } from 'react';
import {  Link } from "react-router-dom";

class navbar extends Component{
  render(){
    return (
    <div>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">ABOUT</Link>
        </li>
        <li>
        <Link to="/contact">Sheeps</Link>
        </li>
    </div>
    );
  }
}
export default navbar;