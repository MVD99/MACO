//react page with a search form and a table with the results
import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Navbar from '../components/navbar'
import {utentes} from '../data/utentes.js'
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';

function PesquisaUtente() {
  return (
    <React.Fragment>
      <Navbar />

      <h1>Pesquisa de Utentes</h1>
      

     
        <Grid sx={{height:'12vw',border:1,Width:"flex",justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={12}>
          <Autocomplete
            sx={{width:'100%', alignItems:'center', justifyContent:'center'}}
            freeSolo
            id="Search Name"
            disableClearable
            options={utentes.map((option) => option.Name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pesquisar Nome"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
        </Grid>

        <Grid sx={{height:'6vw',border:1,Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex',}} item xs={12}>
        <Box sx={{marginTop:'1.5vw'}}><h1> OU  </h1> </Box>
        </Grid>

        <Grid sx={{height:'12vw',border:1,Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex'}} item xs={12}>

          <Autocomplete
            sx={{width:'100%'}}
            freeSolo
            id="Search Name"
            disableClearable
            options={utentes.map((option) => option.ID)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Numero de Utente"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />

        </Grid>



      
      


     

    </React.Fragment>
  );
}


export default PesquisaUtente;