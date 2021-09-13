import React, { useState } from 'react';
import axios from "axios";
/*Estilos */
import "../../styles/Normalize.css";
import "../../styles/Variables.css"
import "../../styles/Main.css";

/*Componentes*/
import Boton from '../atoms/Boton';
import FormAnalizar from '../molecules/FormAnalizar';
import ImagenRectangulos from "../molecules/ImagenRectangulos";
import DatosExtra from '../molecules/DatosExtra';
//Key de face api
let subscriptionKey = process.env.REACT_APP_API_SUBSCRIPTION_KEY;
let endpoint = process.env.REACT_APP_API_END_POINT + '/face/v1.0/detect'; 

const Main = () => {

    const [data, setData] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [displayForm, setDisplayForm] = useState('Flex');
    const [displayBoton, setDisplayBoton] = useState('none');
    
    //Cambia el valor del enlace de la imagen cada vez
    //que detecta un cambio
    const handleOnChange = event => {
        setImageUrl(event.target.value)
    }

    const handleOnClickLimpiarInput = () => {
        setImageUrl('');
    }

    const handleClickNewAnalysis = () => {
        setDisplayForm('flex');
        setDisplayBoton('none');
        setData(null);
    }

    const handleClickAnalizarImagen = async event => {
        event.preventDefault();
        setDisplayForm('none');
        setDisplayBoton('Flex');
        
        //Peticion a la API
        axios({
            method: 'post',
            url: endpoint,
            params: {
                detectionModel: 'detection_01',
                returnFaceId: true,
                returnFaceAttributes: 'age,gender,emotion'
            },
            data: {
                url: imageUrl
            },
            headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
        }).then(function (response) {
            setData(response.data)
            console.log(response.data)
        }).catch(function (error) {
            console.log(error)
        }) 
    }

    return (
        <main>
            <section>
                <FormAnalizar
                    OnChange={handleOnChange}
                    ImageUrl={imageUrl}
                    OnClick={handleClickAnalizarImagen}
                    Display={displayForm}
                    OnClickLimpiarInput={handleOnClickLimpiarInput}
                />
                
                <Boton
                    Display={displayBoton}
                    OnClick={handleClickNewAnalysis}
                    Texto={'Nuevo análisis'}
                />
                
            </section>

            <section className="imagen-datos" >
                <ImagenRectangulos
                    ImageUrl ={imageUrl}
                    Data={data}
                />
                <DatosExtra
                    Data={data}
                    DisplayBoton={displayBoton}
                />
            </section>
        </main>
    )
}

export default Main;