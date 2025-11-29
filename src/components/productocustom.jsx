import React from 'react';
import './productocustom.css';

const ProductoCustom = ({ colorfondo }) => {
    return (
        <>
            <div className='producto-fondo'>
                <div className='azul' style={{ '--c': colorfondo }}>
                    <div className='-arriba'>
                        <div className='-izq'></div>
                        <div className='-lineadorada'></div>
                        <div className='-der'></div>
                    </div>
                    <div className='-contenido'>
                        <div className='-lineadorada-izq'></div>
                        <div className='-producto'>
                            <div className='-imagenproducto'></div>
                            <div className='-informacionproducto'>
                                <div className='-arriba'>
                                    <div className='-izqrelleno'></div>
                                    <div className='-relleno'>
                                        <div className='-con'>
                                            <div>01</div>
                                            <div className='-lineaconblanca'></div>
                                            <div>CACAO</div>
                                        </div>
                                        <div className='-lineablanca'></div>
                                    </div>
                                    <div className='-derrelleno'></div>
                                </div>
                                <div className='-abajo'>

                                </div>
                            </div>
                        </div>
                        <div className='-lineadorada-der'></div>
                    </div>
                    <div className='-abajo'>
                        <div className='-izq'></div>
                        <div className='-lineadorada-abajo'></div>
                        <div className='-der'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductoCustom;