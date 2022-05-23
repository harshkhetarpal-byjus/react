
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Header from './components/Header';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='login' element={<Login />} /> */}
    </Routes>
  );
}

export default App;
