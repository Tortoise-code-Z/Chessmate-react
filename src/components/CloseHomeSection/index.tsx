type Props = {};
import logo from "../../assets/images/static/static-image-logo.png";

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
                <img src={logo} alt="Chessmate" />
            </figure>
        </section>
    );
}

export default CloseHomeSection;
