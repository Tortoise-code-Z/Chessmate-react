import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import { paths } from "../../../consts/paths";
import { LOGO_IMAGE } from "../../../consts/images";

type Props = {};

function Footer({}: Props) {
    const { pathname } = useLocation();
    const isContactPage: boolean = pathname.startsWith("/contact");

    return (
        <footer className={[styles.footer].join(" ")}>
            <div className={[styles.footerActions].join(" ")}>
                {!isContactPage && (
                    <div>
                        <p>Envianos un correo personalizado</p>
                        <NavLink
                            className={["button", "buttonTerciary"].join(" ")}
                            to={`/${paths.contact}`}
                        >
                            <MdOutlineEmail />
                            Contacto
                        </NavLink>
                    </div>
                )}

                <div>
                    <p>
                        Calle Segunda Inventada, Isabel la Cartólica 35,
                        Canarias
                    </p>
                    <a
                        className={["button", "buttonTerciary"].join(" ")}
                        href="#"
                        title="Ver ubicación Chessmate"
                    >
                        <CiMap />
                        Ver en mapa
                    </a>
                </div>
            </div>
            <div className={[styles.footerData].join(" ")}>
                <p>+00 87 64 33 23</p>
                <p>chessmate@protonmail.com</p>
                <div>
                    <a
                        className={["button", "buttonSecondary"].join(" ")}
                        href="#"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        className={["button", "buttonSecondary"].join(" ")}
                        href="#"
                    >
                        <FaYoutube />
                    </a>
                </div>
            </div>
            <div className={[styles.footerTerms].join(" ")}>
                <p>© [2025] Chessmate. Todos los derechos reservados.</p>
                <p>
                    Desarrollado con pasión por el ajedrez | Política de
                    privacidad | Términos y condiciones
                </p>
                <figure>
                    <img
                        src={LOGO_IMAGE.image}
                        alt="Logo Chessmate"
                        title="Logo Chessmate"
                        width={LOGO_IMAGE.width}
                        height={LOGO_IMAGE.height}
                    />
                </figure>
            </div>
        </footer>
    );
}

export default Footer;
