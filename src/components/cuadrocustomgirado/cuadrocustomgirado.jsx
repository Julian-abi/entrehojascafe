import React from "react";
import "./cuadrocustomgirado.css";

const CuadroCustomGir = ({ img }) => {
    return (
        <div className={`imagen-contenedor-gir ${!img ? "sin-img-gir" : ""}`}>
            {img ? <img src={img} alt="imagen-gir" /> : null}
        </div>
    );
};

export default CuadroCustomGir;