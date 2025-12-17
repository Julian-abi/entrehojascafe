import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className='principal-nav'>
                <Link to="/" className='principal-nav-link'>
                    <div className='principal-nav-inicio'>
                        <p>Inicio</p>
                    </div>
                </Link>
                <Link to="/productos" className='principal-nav-link'>
                    <div className='principal-nav-productos'>
                        <p>Productos</p>
                    </div>
                </Link>
                <Link to="/educacion" className='principal-nav-link'>
                    <div className='principal-nav-educacion'>
                        <p>Educación</p>
                    </div>
                </Link>
                <Link to="/sobre-nosotros" className='principal-nav-link'>
                    <div className='principal-nav-item'>
                        <p>Sobre Nosotros</p>
                        
                    </div>
                </Link>
            </nav>
            <div className='principal-nav-linea'></div>
        </>
    );
};

export default Navbar;