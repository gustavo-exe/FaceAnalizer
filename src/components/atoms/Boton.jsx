import React from "react";

const Boton = ({OnClick, Display, Texto}) => (
    <section  style={{display:`${Display}`}}>
        <button
            className="buttonFile"
            onClick={OnClick}
        >
            {Texto}
        </button>
    </section>
)

export default Boton;