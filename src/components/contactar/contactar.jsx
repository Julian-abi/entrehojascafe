import React from 'react';
import './contactar.css';
import CuadroLargo from '../cuadrolargo/cuadrolargo';
import BotomCustom from '../botomcustom/botomcustom';
import RedesBotom from '../redesbotom/redesbotom';

import instagram from '../../../public/Instagram.png';
import tiktok from '../../../public/TikTok.png';
import whatsapp from '../../../public/WhatsApp.png';
import Carousel from '../carrusel/carrusel';

const Contactar = () => {

    const redes = [
        { imagen: instagram, link: 'https://www.instagram.com/jul_abig8l/' },
        { imagen: whatsapp, link: '' },
        { imagen: tiktok, link: '' },
    ];
    return (
        <>
            <div className='contactarFinal'>
                <div className='linea'></div>
                <h2>Contactanos</h2>
                <div className='linea'></div>
                <div className='redescontenido'>
                    <Carousel />
                    <BotomCustom text='Ver Todo' bgColor='#D07916' textColor='#FFECD2' onClick={() => { }} />
                    <div className='mirar'>
                        {redes.map((red, index) => (
                            <RedesBotom
                                key={index}
                                imagen={red.imagen}
                                link={red.link}
                            />
                        ))}
                    </div>
                </div>
                <p>Cada taza cuanta la historia de nuestros CafiCultores</p>
            </div>
        </>
    )
}

export default Contactar;