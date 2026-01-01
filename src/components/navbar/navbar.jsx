import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import './responsive.css';

const Navbar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const location = useLocation();

    // Cerrar menú al cambiar de ruta
    useEffect(() => {
        setMenuAbierto(false);
    }, [location]);

    // Cerrar menú al hacer clic fuera (en el overlay)
    const cerrarMenu = () => {
        setMenuAbierto(false);
    };

    // Prevenir que el clic en el menú cierre el overlay
    const handleMenuClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            {/* Overlay oscuro para móvil */}
            <div 
                className={`menu-overlay ${menuAbierto ? 'activo' : ''}`}
                onClick={cerrarMenu}
            />

            <nav className='principal-nav'>
                {/* BOTÓN HAMBURGUESA */}
                <div 
                    className="menu-icon"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-label="Menú de navegación"
                    role="button"
                >
                    {menuAbierto ? '✕' : '☰'}
                </div>

                {/* MENÚ */}
                <div 
                    className={`menu-links ${menuAbierto ? 'activo' : ''}`}
                    onClick={handleMenuClick}
                >
                    <Link 
                        to="/" 
                        className='principal-nav-link'
                        aria-label="Ir a Inicio"
                    >
                        <div className='principal-nav-inicio'>
                            <p>Inicio</p>
                        </div>
                    </Link>

                    <Link 
                        to="/productos" 
                        className='principal-nav-link'
                        aria-label="Ir a Productos"
                    >
                        <div className='principal-nav-productos'>
                            <p>Productos</p>
                        </div>
                    </Link>

                    <Link 
                        to="/educacion" 
                        className='principal-nav-link'
                        aria-label="Ir a Educación"
                    >
                        <div className='principal-nav-educacion'>
                            <p>Educación</p>
                        </div>
                    </Link>

                    <Link 
                        to="/sobre-nosotros" 
                        className='principal-nav-link'
                        aria-label="Ir a Sobre Nosotros"
                    >
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