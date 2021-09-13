import "../../styles/ImagenRectangulos.css";

const ImagenRectangulos = ({ImageUrl, Data}) => (
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
                </div>
            ))
        }
    </div>
)

export default ImagenRectangulos;