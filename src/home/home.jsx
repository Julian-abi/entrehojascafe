import React from 'react';
import './home.css';
import './homeresponsive.css';

import { 
  florcafe, 
  hoja2, 
  imagen, 
  imagen2, 
  flornaranja, 
  redondo, servir, 
  estetica, 
  granos } 
  from '../assets/images';
import {
  Navbar,
  BotomCustom,
  ProductoCustom,
  CuadroCustom,
  CuadroCustomGir,
  Contactar,
  PrincipalBarra
} from '../components';


const Home = () => {
  return (
    <>
      <div className='principal'>
        <PrincipalBarra />
        <div className='principal-video-presentación'>
        </div>
        <Navbar />
      </div>
      <div className='productos-iniciales'>
        <div className='linea'></div>
        <h2>ESENCIA CAFETERA</h2>
        <div className='linea'></div>
        <p>
          Prueba esta nueva experiencia multisensorial única que conecta la historia, el aroma y el sabor del café.
        </p>
        <div className='-contenidoproductos'>
          <ProductoCustom colorfondo='#02243F' nombrepro='Cacao' numero='01' descrip='Cacao, Vainilla' precio='50.000' />
          <ProductoCustom colorfondo='#680200' nombrepro='Cacao' numero='02' descrip='Cacao, Vainilla' precio='40.000' />
          <ProductoCustom colorfondo='#0E352A' nombrepro='Cacao' numero='03' descrip='Cacao, Vainilla' precio='45.000' />
        </div>
        <BotomCustom text='Ver todo' bgColor='#D07916' textColor='#FFECD2' onClick={() => { }} />
      </div>
      <div className='descripcionempresa'>
        <div className='-titulo'>
          <div className='linea'></div>
          <h2>Café de alta calidad</h2>
          <div className='linea'></div>
        </div>
        <div className='-conte'>
          <div className='hojas-pri'>
            <img src={florcafe} alt="..." className='florcafe' />
            <img src={hoja2} alt="..." className='flor' />
          </div>
          <div className='-derconte'>
            <p>
              Contamos la historia detrás de cada grano, generando una conexión directa entre productor y consumidor, e impulsando un consumo consciente que apoya a las comunidades cafeteras locales
            </p>
          </div>
          <div className='-izqconte'>
            <div className='-imagen1'>
              <CuadroCustom img={imagen} />
            </div>
            <div className='-imagen2'>
              <CuadroCustom img={imagen2} />
            </div>
            <div className='-imagen3'>
              <CuadroCustom />
            </div>
          </div>
          <div className='hojas'>
            <img src={flornaranja} alt="..." className='flornaranja' />
            <img src={hoja2} alt="..." className='flor' />
          </div>
        </div>
      </div>
      <div className='caracteristicas'>
        <div className='sostenibilidad'>
          <div className='contenido'>
            <div className='linea'></div>
            <h2>Sostenibilidad</h2>
            <div className='linea'></div>
            <p>
              Comprometidos con el cuidado del medio ambiente y con prácticas responsables en el cultivo y producción del café, apoyando a las comunidades cafeteras locales
            </p>

          </div>
          <div className='imagenes'>
            <div className='imagen1'>
              <CuadroCustomGir img={redondo} />
            </div>
            <img src={servir} alt="..." className='imagen2' />
          </div>
        </div>
        <div className='autenticidad'>
          <div className='linea'></div>
          <h2>Autenticidad</h2>
          <div className='linea'></div>
          <p>
            Cada taza cuenta la historia de su origen. La marca se enfoca en resaltar la tradición cafetera, los sabores reales y el trabajo artesanal detrás de cada grano</p>
        </div>
        <div className='estetica'>
          <div className='imagenes'>
            <div className='imagen1'>
              <CuadroCustom img={estetica} />
            </div>
            <img src={granos} alt="..." className='imagen2' />
          </div>
          <div className='contenido'>
            <div className='linea'></div>
            <h2>Estetica y Experiencia</h2>
            <div className='linea'></div>
            <p>
              No es solo café, es un objeto de diseño. El empaque y la comunicación buscan ofrecer una experiencia sensorial completa, elegante y memorable para el consumidor</p>
          </div>
        </div>
      </div>
      <Contactar />
    </>
  )
}

export default Home;