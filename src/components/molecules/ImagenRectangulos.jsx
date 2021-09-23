import "../../styles/ImagenRectangulos.css";
import "../../styles/AtributoFacial.css";

const RetornandoEmocion = (emocion) => {
    for (let key in emocion) {
        if (emocion[key] > 0) {
            //Coloca la primera letra en mayuscula y se concatena
            //el resto de letras
            return key.charAt(0) + key.slice(1);
        }
    }
}

const ImagenRectangulos = ({ ImageUrl, Data }) => (
    <div className="imagen-rectangulos" >
        <img
            src={ImageUrl}
            alt="Aqui aparecera la imagen"
        />
        {
            Data &&
            Data.map(r => (
                <div
                    key={r.faceId}
                    style={r.faceRectangle}
                    className="rectangulo"
                >
                    <div className="dato-facial" >

                        <p className="texto" >
                            <b>Genero:</b> <br />
                            {
                                r.faceAttributes.gender
                            }
                        </p>
                        <p className="texto" >
                            <b>Edad:</b>
                            <br />
                            {
                                r.faceAttributes.age
                            }
                        </p>
                        <p className="texto" >
                            <b>Emoción:</b> <br />
                            {
                                RetornandoEmocion(r.faceAttributes.emotion)
                            }
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
)

export default ImagenRectangulos;