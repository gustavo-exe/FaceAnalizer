import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../../styles/Main.css";

let subscriptionKey = process.env.REACT_APP_API_SUBSCRIPTION_KEY;
let endpoint = process.env.REACT_APP_API_END_POINT + '/face/v1.0/detect';  

const Main = () => {

    const [data, setData] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleOnChange = event => {
        setImageUrl(event.target.value)
    }

    const handleClickImage = async event => {
        event.preventDefault();
        axios({
            method: 'post',
            url: endpoint,
            params: {
                detectionModel: 'detection_03',
                returnFaceId: true
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
                <input
                    type="text"
                    placeholder="Coloca el link de la imagen"
                    onChange={handleOnChange}
                    value={imageUrl} style={{ width: "450px" }}
                />

                <button
                    className="buttonFile"
                    onClick={handleClickImage}
                >
                    Analizar
                </button>
            </section>

            <section>
                <img
                    src={imageUrl}
                    alt="Aqui aparecera la imagen"
                />
            </section>
        </main>
    )
}

export default Main;