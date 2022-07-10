import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import MisRoutes from './components/routes/MisRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#E492F5',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0E0325',
      main: '#0E0325',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#000000',
    },
    }
  },
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MisRoutes />

    </ThemeProvider>
  );
}

export default App;