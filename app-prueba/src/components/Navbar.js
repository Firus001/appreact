import { useNavigate } from "react-router-dom";
import * as React from 'react';
import {Link} from 'react-router-dom';



import { Button,AppBar,Box,Toolbar,Typography,IconButton } from '@mui/material';



export default function Navbar() {

  let navigate = useNavigate();

  const login = () => {
    navigate("./login")
  };
  return (
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grupo 3
          </Typography>
          <Button color="inherit" onClick={login}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}