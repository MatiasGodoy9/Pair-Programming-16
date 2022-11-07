import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg';
import './Hedear.css'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div>
            <Link>Home</Link>
            <Link>Productos</Link>
        </div>
        <div className='buscar'>
            <input type="text" name="" id="" placeholder='Buscar...' />
            <button className='btnBuscar'>Buscar</button>
        </div>
    </div>
  )
}

export default Header;