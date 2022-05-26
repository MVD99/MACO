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
import { NavLink } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { pacienteConsultas as consultas } from '../data/pacienteConsultas';

import FormDialog from '../components/AtualizarPacientePopup';


function PerfilPaciente () {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        
        setPage(value);
    };


    return (
        <React.Fragment>
            <Navbar2 />
            <Grid sx = {{marginTop:'10px'}} container spacing={2}>
                <Grid sx={{border:1}} item xs={3}>
                    <Grid sx= {{border:1,height:'17vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
                        <Avatar  alt="ERROR" src={ require("../image/avatar.jpg")}  sx={{ width: "16.5vw", height: "16.5vw"}} />
                    </Grid>
                    <Grid>
                        <h1 style = {{justifyContent:'center',alignItems:'center',display: 'flex'}}>Andre</h1>
                    </Grid>
                    <Grid sx= {{border:1}}>
                        <Grid sx={{paddingTop:'1vw',paddingBottom:'1vw',border:1, justifyContent:'center',alignItems:'center',display: 'flex'}}>
                            <Grid sx={{display:'flex'}}direction='column' spacing={5}>          
                                <h3>
                                    Data de nascimento: 1/2/1960
                                </h3>
                                <h3>
                                    Género Masculino
                                </h3>
                                <h2>
                                    Descrição:
                                </h2>
                                <h3>
                                    1-Diabético
                                </h3>
                                <h3>
                                    Nota: Marido Sra. Fontes operado ao joelho ha 3 meses.
                                </h3>
                            </Grid>
                        </Grid>
                        <Grid sx={{paddingTop:'1vw',paddingBottom:'1vw',border:1, justifyContent:'center',alignItems:'center',display: 'flex'}}>
                            <FormDialog>
                                Atualizar Perfil
                            </FormDialog>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{border:1,justifyContent:'center',alignItems:'center'}} container item xs={9}>

                    <Grid sx ={{border:1,justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={6}>
                        <Stack direction='column' spacing={5}>        
                            <Box sx={{border:1,width:'30vw',bgcolor:'#e5e5e5'}}>
                            Consulta dia {consultas[ ((page*8)-8) ].date}
                        </Box>
                        <Box sx={{border:1,width:'30vw',bgcolor:'#e5e5e5'}}>
                            Consulta dia {consultas[ ((page*8)-7) ].date}
                        </Box>
                        <Box sx={{border:1,width:'30vw',bgcolor:'#e5e5e5'}}>
                            Consulta dia {consultas[ ((page*8)-6) ].date}
                        </Box>
                        <Box sx={{border:1,width:'30vw',bgcolor:'#e5e5e5'}}>
                            Consulta dia {consultas[ ((page*8)-5) ].date}
                        </Box>
                        </Stack>
                    </Grid>

                    <Grid sx ={{border:1,justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={6}>
                        <Stack direction='column' spacing={5}>        
                        <Box sx={{border:1,width:'30vw',bgcolor:'#e5e5e5'}}>
                            Consulta dia {consultas[ ((page*8)-4) ].date}
                        </Box>
                        <Box sx={{border:1,width:'30vw',bgcolor:'#e5e5e5'}}>
                            Consulta dia {consultas[ ((page*8)-3) ].date}
                        </Box>
                        <Box sx={{border:1,width:'30vw',bgcolor:'#e5e5e5'}}>
                            Consulta dia {consultas[ ((page*8)-2) ].date}
                        </Box>
                        <Box sx={{border:1,width:'30vw',bgcolor:'#e5e5e5'}}>
                            Consulta dia {consultas[ ((page*8)-1) ].date}
                        </Box>
                        </Stack>
                    </Grid> 

                    <Pagination count={5} page={page} onChange={handleChange}>

                    </Pagination>

                </Grid>
            </Grid>
            
        </React.Fragment>
    );
    };

    export default PerfilPaciente;