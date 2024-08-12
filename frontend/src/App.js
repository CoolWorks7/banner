import { useState } from 'react';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [server, setServer] = useState('https://prickly-glowing-spaghetti.glitch.me')
  // const [server, setServer] = useState('http://localhost:3000')
  const [colorsArray, _] = useState([ '#d36464', '#9e64d3', '#64d39e', '#6487d3', '#89d364', '#d39264'])
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home server={server} colorsArray={colorsArray}/>}/>
          <Route path='/dashboard' element={<Dashboard server={server} colorsArray={colorsArray}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
