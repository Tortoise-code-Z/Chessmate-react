import { NavLink } from "react-router-dom";
import { paths } from "../../consts/paths";
import { MdOutlineEmail } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { LOGO_IMAGE } from "../../consts/images";

type Props = {};

function Footer({}: Props) {
    return (
        <footer>
            <div>
                <div>
                    <p>Envianos un correo personalizado</p>
                    <NavLink
                        style={{ display: "flex" }}
                        to={`/${paths.contact}`}
                    >
                        <MdOutlineEmail />
                        Contacto
                    </NavLink>
                </div>
                <div>
                    <p>
                        Calle Segunda Inventada, Isabel la Cartólica 35,
                        Canarias
                    </p>
                    <a
                        style={{ display: "flex" }}
                        href="#"
                        title="Ver ubicación Chessmate"
                    >
                        <CiMap />
                        Ver en mapa
                    </a>
                </div>
            </div>
            <div>
                <p>+00 87 64 33 23</p>
                <p>chessmate@protonmail.com</p>
                <a href="#" style={{ display: "block" }}>
                    <FaInstagram />
                </a>
                <a href="#" style={{ display: "block" }}>
                    <AiOutlineYoutube />
                </a>
            </div>
            <div>
                <p>© [2025] Chessmate. Todos los derechos reservados.</p>
                <p>
                    Desarrollado con pasión por el ajedrez | Política de
                    privacidad | Términos y condiciones
                </p>
                <img
                    src={LOGO_IMAGE.image}
                    alt="Logo Chessmate"
                    title="Logo Chessmate"
                    width={LOGO_IMAGE.width}
                    height={LOGO_IMAGE.height}
                />
            </div>
        </footer>
    );
}

export default Footer;
