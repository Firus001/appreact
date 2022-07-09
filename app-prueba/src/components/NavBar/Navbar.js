import { useNavigate,Outlet } from "react-router-dom";
import * as React from 'react';
import {Link} from 'react-router-dom';
import { Button,AppBar,Box,Toolbar,Typography,IconButton,Container } from '@mui/material';



export default function Navbar() {
  
  const logo = require('../imagenes/instagram.png')

  let navigate = useNavigate();

  const login = () => {
    navigate("./login")
  };
  const peliculas = () => {
    navigate("./peliculas")
  };
  const home = () => {
    navigate('/')
  };
  return (
    
   <div>
    <nav>

<Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ooClick={home}>
        Grupo 6
      </Typography>
      <Button color="inherit" onClick={peliculas}>peliculas</Button>
      <Button color="inherit" onClick={login}>Login</Button>
    </Toolbar>
  </AppBar>
</Box>

</nav>
<br />
      <Container>
        <Outlet />
      </Container>
   </div>
  );
}