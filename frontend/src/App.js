import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Redirect } from 'react-router';
// pages & components
import Home from './pages/Home'
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/aboutus' element={<AboutUs/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
