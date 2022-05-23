import React from 'react';
import Navbar from '../components/navbar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';


function Register  ()  {
  return (
    <>

      <Navbar />
      <Container sx={{border:1,height:'45vw',width:'30vw'}} >
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{height:'23vw',border:1,Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex'}}>
            <Avatar  alt="ERROR" src={ require("../image/MACO_Logo.png")}  sx={{height: "100%",width:'15vw'}} />
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',border:1}}>
            Username
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',border:1}}>
            pw
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',border:1}}>
            Comfirm password
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',border:1}}>
            login
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;