import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar'

import Home from './Containers/Home'
import About from './Containers/about'
import Perfil from './Containers/Perfil'
<<<<<<< Updated upstream
import SignOut from './Containers/SignOut'
import Calendario from './Containers/calendario'
=======
import Login from './Containers/Login'
import Calendario from './Containers/Calendario'
import PesquisaUtente from './Containers/PesquisaUtente';
import Register from './Containers/Register';
import PerfilPaciente from './Containers/PerfilPaciente';


import { ThemeProvider, createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ea6a47',
    },
    secondary: {
      main: '#0091d5',
    },
  },
});
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
     
      <Routes>
       <Route path='/Home' element={<Home/>} />
       <Route path='/Perfil' element={<Perfil/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/SignOut' element={<SignOut/>} />
       <Route path='/Calendario' element={<Calendario/>} />
<<<<<<< Updated upstream
=======
       <Route path='/PesquisaUtente' element={<PesquisaUtente/>} />
       <Route path='/Register' element={<Register/>} />
       <Route path='/PerfilPaciente' element={<PerfilPaciente/>} />
       <Route path='/Calendario' element={<Calendario/>} />
>>>>>>> Stashed changes


      </Routes>
    </Router>
  );
}

export default App;
