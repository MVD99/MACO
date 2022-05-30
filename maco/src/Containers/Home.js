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
import Navbar2 from '../components/Navbar2'
import Stack from '@mui/material/Stack';



import { NavLink } from 'react-router-dom';

import { NavLink as Link } from 'react-router-dom';


import DemoApp from '../components/DemoApp';
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
    <Navbar2 />

    <Grid sx = {{marginTop:'10px'}} container spacing={2}>
        <Grid sx={{justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={3}>
          <Grid sx= {{border:1,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Avatar alt="ERROR" src={ require("../image/avatar.jpg")}  sx={{ width: "16.5vw", height: "16.5vw"}} />
          </Grid>
        </Grid>
        <Grid sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={6}>
        
          <DemoApp />

        </Grid>
        <Grid sx={{border:1,border:1, justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={3}>
          <Stack sx = {{justifyContent:'center',alignItems:'center',display: 'flex'}}direction='column' spacing={5}>
                        
            <h2>
                Proxima Consulta em: 5 minutos
            </h2>

            <NavLink to = '/Home'>
              <Button  variant='contained'>
                  Adicionar Consulta
              </Button>
            </NavLink>
            <NavLink to = '/FormPaciente'>
              <Button  variant='contained'>
                  Adicionar Paciente
              </Button>
            </NavLink>

          </Stack>
        </Grid>

    </Grid>
    </React.Fragment>
    );
  }



export default Home;