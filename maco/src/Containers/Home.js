import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { margin } from '@mui/system';
import Button from '@mui/material/Button';
import Navbar from '../components/navbar'
 

import { NavLink as Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home () {
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //make circle item
    //     height: '90vh'
    //   }}
    // >
    //   <h1>Home</h1>
    // </div>


    <React.Fragment>
    <Navbar />

        <Grid sx = {{marginTop:'10px'}} container spacing={2}>
          <Grid sx={{bgcolor:"#0f0"}} item xs={3}>
            <div style = {{justifyContent:'center',allignItems:'center',display: 'flex'}}>
              <Avatar  alt="ERROR" src={ require("../image/avatar.jpg")}  sx={{ width: "16.5vw", height: "16.5vw"}} />
              
          </div>
          <h1 style = {{paddingTop:"0.3vw",justifyContent:'center',allignItems:'center',display: 'flex'}}>Andre</h1>


          </Grid>

          <Grid container sx={{bgcolor:"#ff0",height:"25vw"}} item xs={9}>
            <Grid sx={{bgcolor:"#ff0",paddingTop:"5vw"}} item xs={12}>

            </Grid>
            
            <Grid sx={{bgcolor:"#ffaf",justifyContent:'center',allignItems:'center',display:"flex",paddingTop:"5vw"}}   item xs={4}>
              <Link to="/calendario">
              <Button href = '/calendario' sx = {{margin:"auto"}}variant="contained" disableElevation>
                Ver calendário
              </Button>
              </Link>
            
            
<<<<<<< Updated upstream
=======
            </LayoutContainerCima>
          <LayoutContainerBaixo >
            <Grid container spacing={1}>
              <Grid sx={{Width:"flex",justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={4}>
                <NavLink to='/Calendario'>
                    <Button variant='contained'>
                      Ver Calendário
                    </Button>
                </NavLink>
              </Grid>
              <Grid sx={{Width:"flex",justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={4}>
                <NavLink to='/Calendario'>
                    <Button variant='contained'>
                      Marcar Consulta
                    </Button>
                </NavLink>
                </Grid>
                <Grid sx={{Width:"flex",justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={4}>
                  <NavLink to='/PesquisaUtente'>

                  <Button variant='contained'>
                    Pesquisar paciente
                  </Button>

                  </NavLink>
                </Grid>
>>>>>>> Stashed changes
            </Grid>
            <Grid  sx={{bgcolor:"#0f0",justifyContent:'center',allignItems:'center',display:"flex"}} item xs={4}>
              <Button sx = {{margin:"auto"}}variant="contained" disableElevation>
                Agendar Consulta
              </Button>
            </Grid>
<<<<<<< Updated upstream
            <Grid  sx={{bgcolor:"#0ff",justifyContent:'center',allignItems:'center',display:"flex"}} item xs={4}>
              <Button sx = {{margin:"auto"}}variant="contained" disableElevation>
                Pesquisar paciente
              </Button>
=======
            <Grid sx={{border:1,display:'flex'}} item xs={4}>
              <NavLink to='/PerfilPaciente'>

                <Button variant='contained'sx ={{display:'flex',width:'99%'}}>
                        Ver detalhes do próximo paciente
                </Button>
              </NavLink>
>>>>>>> Stashed changes
            </Grid>

          </Grid>
        </Grid>


    </React.Fragment>
    );
  }



export default Home;