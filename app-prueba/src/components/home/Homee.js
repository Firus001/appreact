import React from 'react';
import axios from 'axios';
import './home.css'
import { Button,AppBar,Box,Toolbar,Typography,IconButton } from '@mui/material';
import { isLogged } from '../utils/cookiesUtils';

export default function Home() {

  const img1 =require ('../imagenes/img1.jpg');
  const img2 =require ('../imagenes/img2.jpg');
  const img3 =require ('../imagenes/img3.jpg');
  const img4 =require ('../imagenes/img4.jpg');
  const img5 =require ('../imagenes/img5.jpg');
  const img6 =require ('../imagenes/img6.jpg');
  const img7=require ('../imagenes/img7.jpg');
  const img8=require ('../imagenes/img8.jpg');
  const img9=require ('../imagenes/img9.jpg');
  const img10=require ('../imagenes/img10.jpg');

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
   <body>
    <div>
    <img src={img1} className="img"/>
    <img src={img2} className="img"/>
    <img src={img3} className="img"/>
    <img src={img4} className="img"/>
    <img src={img5} className="img"/>
    <img src={img6} className="img"/>
    <img src={img7} className="img"/>
    <img src={img8} className="img"/>
    <img src={img9} className="img"/>
    <img src={img10} className="img"/>
    </div>
   </body>
    );
  }