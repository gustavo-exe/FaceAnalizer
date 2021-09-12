import React, { useState } from 'react';
import axios from "axios";
import "../../styles/Main.css";
import Boton from '../atoms/Boton';
import FormAnalizar from '../molecules/FormAnalizar';

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

    //Retorna el nombre del campo de la emocion y no el valor
    const RetornandoEmocion = (emocion) => {
        for (let key in emocion) {
            if (emocion[key] > 0) {
                //Coloca la primera letra en mayuscula y se concatena
                //el resto de letras
                return key.charAt(0).toUpperCase() + key.slice(1);
            }
        }
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
                <div className="imagen-rectangulos" >
                    <img
                        src={imageUrl}
                        alt="Aqui aparecera la imagen"
                    />
                    {
                        data &&
                        data.map(r => (
                            <div
                                key={r.faceId}
                                style={r.faceRectangle}
                                className="rectangulo"
                            >
                            </div>
                        ))
                    }
                </div>
                <div className="datos-extra" style={{display: `${displayBoton}`}} >
                    <h2>Datos</h2>
                    {
                        data &&
                        data.map(r => (
                            <div className="dato" key={r.faceId} >

                                <span>
                                    {
                                        r.faceAttributes.gender === "male" ? "🧑" : "👧"
                                    }
                                    {
                                        r.faceAttributes.age
                                    }
                                </span>
                                <span>
                                    {
                                        RetornandoEmocion(r.faceAttributes.emotion)
                                    }
                                </span>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default Main;