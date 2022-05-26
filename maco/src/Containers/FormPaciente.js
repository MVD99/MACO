import React from 'react';
import Navbar from '../components/navbar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import Navbar2 from '../components/Navbar2'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function FormPaciente  ()  {
  return (
    <>
      <Navbar2 />
      <Container sx={{width:'30vw'}} >
        <Grid container spacing={1}>
        <Container sx={{justifyContent:'center',alignItems:'center',display:'flex',paddingTop:'5vw',pb:'5vw'}}>
            <h1 sx={{justifyContent:'center',alignItems:'center'}}>Adicionar Utente</h1>
        </Container>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField variant='outlined' label ='Nome Completo' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField variant='outlined' label ='Idade' sx ={{width:'99%'}}>
            </TextField>
            <FormControl sx ={{justifyContent:'center',alignItems:'center',display: 'flex',paddingTop:'2vw'}}>
                    <FormLabel id="demo-radio-buttons-group-label">Genero</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-buttons-group-label"
                            defaultValue="masc"
                            name="row-buttons-group">
                            <FormControlLabel value="masc" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="femi" control={<Radio />} label="Feminino" />
                        </RadioGroup>
                    </FormControl>
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <NavLink to='/Home'>
              <Button variant='contained'>
                      Register
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FormPaciente;