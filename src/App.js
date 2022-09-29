import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';

function App() {
  return <BrowserRouter>
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  </BrowserRouter>
}

export default App;
