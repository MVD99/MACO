import React from 'react';
import Navbar from '../components/navbar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { NavLink } from 'react-router-dom';

import NavbarLogin from '../components/NavbarLogin'

import Marcarpopup from '../components/DarConsultapopup'

function Login  ()  {
  return (
    <>


      <NavbarLogin />
      <Container sx={{width:'30vw'}} >
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{height:'23vw',Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex'}}>
            <Avatar  alt="ERROR" src={ require("../image/MACO_Logo.png")}  sx={{height: "100%",width:'15vw'}} />
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField variant='outlined' label ='Username' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField id="pw"type='password'variant='outlined' label ='Password' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{justifyContent:'center',alignItems:'center',display: 'flex'}}>
             <FormGroup sx={{alignItems:'left'}}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Keep Signed in" />
             </FormGroup>
          </Grid>
          <Grid item xs={12} sx={{justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <NavLink to='/Home'>
              <Button variant='contained'>
                      Login
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;