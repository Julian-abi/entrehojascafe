import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import './responsive.css';

const Navbar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <>
            <nav className='principal-nav'>

                {/* BOTÓN HAMBURGUESA */}
                <div 
                    className="menu-icon"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                >
                    ☰
                </div>

                {/* MENÚ */}
                <div className={`menu-links ${menuAbierto ? 'activo' : ''}`}>
                    <Link to="/" className='principal-nav-link' onClick={() => setMenuAbierto(false)}>
                        <div className='principal-nav-inicio'>
                            <p>Inicio</p>
                        </div>
                    </Link>

                    <Link to="/productos" className='principal-nav-link' onClick={() => setMenuAbierto(false)}>
                        <div className='principal-nav-productos'>
                            <p>Productos</p>
                        </div>
                    </Link>

                    <Link to="/educacion" className='principal-nav-link' onClick={() => setMenuAbierto(false)}>
                        <div className='principal-nav-educacion'>
                            <p>Educación</p>
                        </div>
                    </Link>

                    <Link to="/sobre-nosotros" className='principal-nav-link' onClick={() => setMenuAbierto(false)}>
                        <div className='principal-nav-item'>
                            <p>Sobre Nosotros</p>
                        </div>
                    </Link>
                </div>
            </nav>

            <div className='principal-nav-linea'></div>
        </>
    );
};

export default Navbar;
