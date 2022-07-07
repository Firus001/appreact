import * as React from 'react';
import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button,AppBar,Box,Toolbar,Typography,IconButton } from '@mui/material';
export default function LoginPage() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation()
    const navigate = useNavigate();
    const hola= 'hola';

    console.log(location)

    const handleLogin = () => {

        const body = {
          username: email,
          password: password
        }
    
        const options = {
          withCredentials: true
        }
    
        axios.post( "http://localhost:3001/auth/login", body, options)
        .then(body => {
            navigate(location.state.paginaAnterior, { replace: true });
        })
        .catch(e => console.log(e));
      }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }


    return (
      <p>hola</p>
    );

}