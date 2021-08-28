import React from "react";

const FormAnalizar = ({ OnChange, ImageUrl, OnClick, Display, OnClickLimpiarInput }) => (
    <section style={{ display: `${Display}` }}>

        <div className="input-button" >
            <input
                type="text"
                placeholder="Coloca el link de la imagen"
                onChange={OnChange}
                value={ImageUrl}
            />
            <button 
                className="button-flotante" 
                onClick={OnClickLimpiarInput}
            >
                <img src="https://img.icons8.com/material-rounded/24/0078d4/multiply--v1.png" alt="Limpieza" />
            </button>
        </div>
        <button
            className="buttonFile"
            onClick={OnClick}
        >
            Analizar
        </button>
    </section>
)

export default FormAnalizar;