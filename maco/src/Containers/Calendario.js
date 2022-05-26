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

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function Calendario () {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };


    return (
        <React.Fragment>
            <Navbar2 />
            <Grid sx = {{marginTop:'10px'}} container spacing={2}>
                <Grid sx={{border:1,}} item xs={3}>
                    <Grid sx= {{border:1,justifyContent:'center',alignItems:'center',display: 'flex'}}>
                       <h1>Calendário</h1>
                    </Grid>
                    <Grid>
                    <FormControl sx ={{justifyContent:'center',alignItems:'center',display: 'flex',paddingTop:'2vw'}}>
                    <FormLabel id="demo-radio-buttons-group-label">Tipo de Calendário</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Dia" control={<Radio />} label="Dia" />
                            <FormControlLabel value="Semana" control={<Radio />} label="Semana" />
                            <FormControlLabel value="Mês" control={<Radio />} label="Mês" />
                        </RadioGroup>
                    </FormControl>
                    </Grid>
                    <Grid sx={{paddingTop:'1vw',paddingBottom:'1vw',border:1, justifyContent:'center',alignItems:'center',display: 'flex',paddingTop:'2vw'}}>  
                        <NavLink to = '/Home'>
                            <Button variant='contained'>
                                Adicionar Consulta
                            </Button>
                        </NavLink>
                    </Grid>
                </Grid>
                <Grid sx={{border:1,justifyContent:'center',alignItems:'center'}} container item xs={9}>
                    <h1>CALENDRIO.PNG</h1>
                </Grid>
            </Grid>

        </React.Fragment>
    );
    };

    export default Calendario;