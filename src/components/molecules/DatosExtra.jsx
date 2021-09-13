import "../../styles/DatosExtra.css"

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


const DatosExtra = ({Data, DisplayBoton}) => (
    <div className="datos-extra" style={{ display: `${DisplayBoton}` }} >
        <h2>Datos</h2>
        {
            Data &&
            Data.map(r => (
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
)

export default DatosExtra;