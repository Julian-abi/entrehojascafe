import React from 'react';
import './home.css';
import logo from '../assets/images/principal-barra-imagen.png';
import hoja1 from '../assets/images/hoja-fondo.png';
import hoja2 from '../assets/images/hoja-fondo2.png';

const Home = () => {
  return (
    <>
      <div className='principal'>
        <div className='principal-barra'>
          <div className="principal-barra-linea"></div>
          <div className="principal-barra-circulo-izq"></div>
          <div className="principal-barra-circulo-der"></div>
          <img src={hoja1} alt="..." className='hoja-fondo'/>
          <img src={hoja2} alt="..." className='hoja-fondo2'/>
          <img src={hoja1} alt="..." className='hoja-fondo3'/>
          <img src={hoja2} alt="..." className='hoja-fondo4'/>
          <img src={logo} alt="..." className='principal-barra-imagen'/>
        </div>
      </div>
    </>
  )
}

export default Home