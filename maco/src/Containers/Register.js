import React from 'react';
import Navbar from '../components/navbar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import { NavLink } from 'react-router-dom';


import NavbarRegister from '../components/NavbarRegister';

function Register  ()  {
  return (
    <>
      <NavbarRegister />
      <Container sx={{width:'30vw'}} >
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{height:'23vw',Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex'}}>
            <Avatar  alt="ERROR" src={ require("../image/MACO_Logo.png")}  sx={{height: "100%",width:'15vw'}} />
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField variant='outlined' label ='Nome de Utilizador' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField type ="password"variant='outlined' label ='Palavra-passe' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField type ="password" variant='outlined' label ='Confirmar Palavra-passe' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <NavLink to='/Home'>
              <Button variant='contained'>
                      Registar
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;