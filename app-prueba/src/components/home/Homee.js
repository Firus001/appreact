import React from 'react';
import axios from 'axios';
import { Button,AppBar,Box,Toolbar,Typography,IconButton } from '@mui/material';
import { isLogged } from '../utils/cookiesUtils';

export default function Home() {


  const isLoggedText = isLogged() ? <p>Logueado correctamente</p> : <p>Sin loguearse</p>

  const handleLogin = () => {

    const body = {
      username: "admin@asd.com",
      password: "1234"
    }

    const options = {
      withCredentials: true
    }

    axios.post( "http://localhost:3001/auth/login", body, options)
    .then(body => {
      console.log(body)
    })
    .catch(e => console.log(e));
  }

  const LogInButton = <Button onClick={handleLogin} variant="contained" color="error" >Login</Button>
 
  return (
      <p>hola</p>
    );
  }
  return (
    <p>hola</p>
  );
