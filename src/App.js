import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Account from './pages/Account';
import Homepage from './pages/Homepage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#60a5fa'
    }
  }
})

function App() {
  return <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
}

export default App;
