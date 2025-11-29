import React from 'react';
import './botomcustom.css';

const BotomCustom = ({ text, textColor, bgColor, onClick }) => {
    return (
        <>
            <button
                onClick={onClick}
                className='boton'
                style={{
                    '--bg': bgColor,
                    '--text': textColor,
                }}
            >
                {text}
            </button>
        </>
    )
}

export default BotomCustom;