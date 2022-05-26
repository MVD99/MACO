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

import { NavLink } from 'react-router-dom';

import { NavLink as Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LayoutContainerCima = styled('div')(() => ({
  width: '100%',
  height:'15vw',
  bgcolor:'#ffa ',
  border:'1px solid #000',
  justifyContent:'center',
  alignItems:'center',
  display: 'flex'

}));
const LayoutContainerBaixo = styled('div')(() => ({
  width: '100%',
  height:'5vw',
  border:'1px solid #000',
  justifyContent:'center',
  alignItems:'center',
  paddingTop:'1vw'

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
          <Grid sx={{border:1}} item xs={3}>
            <div style = {{justifyContent:'center',alignItems:'center',display: 'flex'}}>
              <Avatar  alt="ERROR" src={ require("../image/avatar.jpg")}  sx={{ width: "16.5vw", height: "16.5vw"}} />
              
          </div>
          <h1 style = {{paddingTop:"0.3vw",justifyContent:'center',alignItems:'center',display: 'flex'}}>Andre</h1>


          </Grid>

          <Grid sx={{paddingRight:'0.5vw'}}container  item xs={9}>
          <LayoutContainerCima >

              <Avatar  alt="ERROR" src={ require("../image/MACO_Logo.png")}  sx={{height: "100%",width:'15vw'}} />
            
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
            </Grid>
          </LayoutContainerBaixo>
          </Grid>
        </Grid>
      <Grid sx = {{marginTop:'10px'}} container spacing={2}>
        <Grid sx={{border:1,height:'auto',Width:"flex",justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={3}>
          <div>
            <Button variant='contained'>
                    Adicionar Paciente
            </Button>
          </div>
        </Grid>
        <Grid  item xs={9}>
          <Grid  sx ={{}}container spacing={2}>
            <Grid sx={{border:1}} item xs={8}>
              <h1>Proxima consulta em: 05 minutos</h1>
            </Grid>
            <Grid sx={{border:1}} item xs={4}>
              <NavLink to='/PerfilPaciente'>

                <Button variant='contained'>
                        Ver detalhes do próximo paciente
                </Button>
              </NavLink>
            </Grid>
                
          </Grid>
        </Grid>
       </Grid>

    </React.Fragment>
    );
  }



export default Home;