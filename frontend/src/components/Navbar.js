import { Link } from 'react-router-dom'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Health Buddy</h1>
        </Link>

        <div className='socials'>
          <a href="https://www.instagram.com/arkaprabha_das10/">   <img className='instagram' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png" alt="" />  </a>
          <button >Graph</button>
          <button style={{margin:'5px'}}><a href='/aboutus'>About Us</a></button>
        </div>

      </div>
    </header>
  )
}

export default Navbar