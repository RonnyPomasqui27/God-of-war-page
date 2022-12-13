import React from 'react';
import { Link } from 'react-router-dom';
import Videos from '../pages/Videos';
import '../styles/navbar.css'

const NavBar = () => {

  const toggle = () =>{
    const navbar = document.querySelector('.nav')
    navbar.classList.toggle('active')
  }

  return (
    <header className='nav_container'>
      <img src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-logo-01-09sep21$en?$native--t$" alt="logo " className='nav_logo'/>
      <i className="fa-solid fa-bars nav_hamburger" onClick={toggle}></i>
      <nav className='nav'>
        <ul className='nav_links'>
          <li className='nav_link'><Link to='/' className='nav_menu'>Inicio</Link></li>
          <li className='nav_link'><Link to='/videos' className='nav_menu'>Videos</Link></li>
          <li className='nav_link'><a href="https://www.facebook.com/gaming/godofwarragnarok" target='_blank' className='nav_menu'>Comunidad</a></li>
          <li className='nav_link'><a href="https://www.g2a.com/es/god-of-war-ragnarok-ps5-psn-key-united-states-i10000302523001" target="_blank" className='nav_menu buy'>Comprar Ahorra</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;