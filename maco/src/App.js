import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar'

import Home from './Containers/Home'
import About from './Containers/about'
import Perfil from './Containers/Perfil'
import SignOut from './Containers/SignOut'
import Calendario from './Containers/calendario'

function App() {
  return (
    <Router>
     
      <Routes>
       <Route path='/Home' element={<Home/>} />
       <Route path='/Perfil' element={<Perfil/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/SignOut' element={<SignOut/>} />
       <Route path='/Calendario' element={<Calendario/>} />


      </Routes>
    </Router>
  );
}

export default App;
