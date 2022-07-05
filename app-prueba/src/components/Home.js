import { Button } from '@mui/material';
import axios from 'axios';
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
  //const AlumnosButton = <Button onClick={}></Button>
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {isLoggedText}
          {LogInButton}

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
      </div>
    );
  }