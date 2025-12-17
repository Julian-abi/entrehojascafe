import React from 'react';
import './productocustom.css';
import BotomCustom from '../botomcustom/botomcustom';

const ProductoCustom = ({ colorfondo, numero, nombrepro, descrip, precio }) => {
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
                                            <h3>{numero}</h3>
                                            <div className='-lineaconblanca'></div>
                                            <h3>{nombrepro}</h3>
                                        </div>
                                        <div className='-lineablanca'></div>
                                    </div>
                                    <div className='-derrelleno'></div>
                                </div>
                                <div className='-abajo'>
                                    <div className='-precio'>
                                            <h3>{descrip}</h3>
                                            <h3> <b>${precio}</b></h3>
                                            <BotomCustom text='Añadir' bgColor='#FFECD2' textColor='#D07916' />
                                        </div>
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