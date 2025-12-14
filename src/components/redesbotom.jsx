import React from 'react';
import './redesbotom.css';

const RedesBotom = ({imagen, link}) => {
    return (
        <>
        <a href={link} className='link-redes' target='_blank'>
            <div className='redesbotom-principal'>
                <img src={imagen} alt="..." className='imagen'/>
                <div className='logo'>
                    <h2>ENTRE HOJAS CÁFE</h2>
                    <p>ORGANICO & ARTESANAL</p>
                </div>
            </div>
        </a>
        </>
    )
}

export default RedesBotom;