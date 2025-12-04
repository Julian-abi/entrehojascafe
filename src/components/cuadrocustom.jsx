import React from "react";
import "./cuadrocustom.css";

const CuadroCustom = ({ img }) => {
    return (
        <div className={`imagen-contenedor ${!img ? "sin-img" : ""}`}>
            {img ? <img src={img} alt="imagen" /> : null}
        </div>
    );
};

export default CuadroCustom;