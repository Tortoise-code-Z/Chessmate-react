type Props = {};
import { getImage } from "../../utils/images";

function CloseHomeSection({}: Props) {
    return (
        <section>
            <h2>
                Muchas gracias por{" "}
                <span>
                    <span>confiar</span>en nosotros
                </span>
            </h2>
            <p>
                Te esperamos con ilusión en <span>tu portal de alumno</span>
            </p>
            <figure>
                <img
                    src={getImage("static-image-logo_500x500_.png", ["static"])}
                    alt="Chessmate"
                />
            </figure>
        </section>
    );
}

export default CloseHomeSection;
