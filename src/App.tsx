import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#EEEEEE', // ページ全体の背景色
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
