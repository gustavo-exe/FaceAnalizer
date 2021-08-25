import React from 'react';
import instance from "../../api/api";

const Main = () => {
    console.log(instance);
    console.log(process.env.REACT_API_END_POINT);
    return(
        <main>
            <section>
                Contenido principal
            </section>
        </main>
    )
}

export default Main;