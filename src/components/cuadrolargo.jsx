import React from "react";
import "./cuadrolargo.css";

const CuadroLargo = ({ img }) => {
    return (
        <div className={`imagen-contenedor-lar ${!img ? "sin-img-lar" : ""}`}>
            {img ? <img src={img} alt="imagen-gir" /> : null}
        </div>
    );
};

export default CuadroLargo;