import React from 'react';

import Imagem from '../../assets/programmer.svg';
import Header from '../../components/header';

import './home.css';

function Home() {
  return (
    <>
      <Header/>
      <div className="container">
        <div className="titulo">
          <h1> Meu primerio app com React</h1>
          <p>Labtekh blá blá blá</p>
        </div>
        <img src={Imagem} alt="Imagem"></img>
      </div>
    </>
  );
}

export default Home;