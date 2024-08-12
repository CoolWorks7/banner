import { useState } from 'react';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [server, setServer] = useState('https://prickly-glowing-spaghetti.glitch.me')
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home server={server}/>} />
          <Route path='/dashboard' element={<Dashboard server={server}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
