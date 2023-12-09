import React from 'react'
import logo from '../images/logo1.png';
const Navbar = () => {
  return (
    <>
     <header className="header">
        <img className='logo' src={logo} alt='brand_logo'/> 
         <nav className='navbar'>
            <ul className='navbar_lists'>
                <li><a className='navbar_link home_link' href='/home'>home</a></li>
                <li><a className='navbar_link services_link' href='/services'>services</a></li>
                <li><a className='navbar_link about_link' href='/about'>about</a></li>
                <li><a className='navbar_link contact_link' href='/more'>contact</a></li>   
            </ul>
         </nav>
     </header> 
    </>
  )
}

export default Navbar;
