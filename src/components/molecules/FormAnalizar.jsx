import React from "react";

const FormAnalizar = ({OnChange, ImageUrl, OnClick, Display}) => (
    <section  style={{display:`${Display}`}}>
        <input
            type="text"
            placeholder="Coloca el link de la imagen"
            onChange={OnChange}
            value={ImageUrl}
        />
        <button
            className="buttonFile"
            onClick={OnClick}
        >
            Analizar
        </button>
    </section>
)

export default FormAnalizar;