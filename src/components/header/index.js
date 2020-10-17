import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import Logo from '../../assets/logo.png';

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo Lab Tekh"/>
      <h1>Bem vindo!</h1>
      <h1><Link to='/'>HOME</Link></h1>
      <h1><Link to='/users'>LOGIN</Link></h1>
    </div>
  );
}

export default Header;
