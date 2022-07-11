import * as React from 'react';
import './Login.css';
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
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login in</h3>
            <div className="form-group mt-3">
              <label>Direccion de email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Ingresar email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingresar constraseña"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" 
              className="btn btn-primary"
              onClick={handleLogin}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )

}