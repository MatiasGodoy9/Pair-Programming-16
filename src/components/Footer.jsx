import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTiktok} from 'react-icons/fa';
import logo from '../images/logo.jpg';
import './Footer.css';

function Footer() {
  return (
    <div className='foter'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='copy'>
        <p>Copyright&copy; 2022 - - Todos los derechos reservados</p>
      </div>
      <div className='icon'>
        <p><FaFacebookSquare /></p>
        <p><FaInstagram/></p>
        <p><FaTiktok/></p>
      </div>
      
        
    </div>
  )
}

export default Footer