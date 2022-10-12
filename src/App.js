import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Account from './pages/Account';
import Homepage from './pages/Homepage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import Mission from './pages/Mission';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#60a5fa',
    },
    white: {
      main: '#e3f2fd'
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
        <Route path='/mission' element={<Mission />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
}

export default App;
