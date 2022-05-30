import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react'

import Autocomplete from '@mui/material/Autocomplete';

import {utentes} from '../data/utentes.js'


export default function MarcarConsultaPopup(props) {

  const [open, setOpen] = React.useState(true);
  const [nomeUtente,setnomeUtente] = useState('')
  const [NumeroUtente,setNumeroUtente] = useState('')
  const [Titulo,setTitulo] = useState('')


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (props.close!=null) props.close()
  
  };
  const handleCloseSend = () => {

    console.log("AAAAAAAAAAAAAAAAA"+nomeUtente)
    // localStorage.setItem('nomeUtente',JSON.stringify(nomeUtente))
    // localStorage.setItem('NumeroUtente',NumeroUtente)
    // localStorage.setItem('Titulo',Titulo)



    //window.location.reload(false);
    
    setOpen(false);
    if (props.submit!=null) props.submit("Joana",'1243434')
    if (props.close!=null) props.close()
  }



  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Marcar Consulta
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Marcar Consulta para o dia 30/2/2022</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" >
              <TextField
                sx={{
                  display:'flex',
                  paddingTop:'0.5vw',
                  paddingBottom:'0.25vw',
                }}
                multiline
                rows={4}
                onChange={(e) => setTitulo(e.target.value)}

                label="Descricao"

              />
          <Autocomplete
            sx={{width:'100%', alignItems:'center', justifyContent:'center',paddingTop:'0.25vw',paddingBottom:'0.25vw'}}
            freeSolo
            id="Search Name"
            disableClearable
            options={utentes.map((option) => option.Name)}
            renderInput={(params) => (
              <TextField
                onChange={(e) => setnomeUtente(e.target.value)}

                {...params}
                label="Nome Utente"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
          <h3>Ou</h3>
          <Autocomplete
            sx={{width:'100%',paddingTop:'0.25vw',paddingBottom:'0.25vw'}}
            freeSolo
            id="Search Name"
            disableClearable
            options={utentes.map((option) => option.ID)}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={(e) => setNumeroUtente(e.target.value)}

                label="Numero de Utente"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSend}>Marcar</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}
