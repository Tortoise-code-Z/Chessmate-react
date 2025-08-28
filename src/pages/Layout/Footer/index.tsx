import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import { PATHS } from "../../../consts/paths";
import { LOGO_IMAGE } from "../../../consts/images";
import FigureImage from "../../../components/FigureImage";

type Props = {};

/**
 * Footer component that displays the website footer with contact information, social links, and legal notices.
 *
 * Features:
 * - Conditional contact section with email link, hidden on the contact page.
 * - Footer data section showing phone, email, and social media links (Instagram, YouTube).
 * - Footer terms section with copyright, privacy policy, terms, and logo image.
 * - `FigureImage`: Displays the site logo with proper sizing and alt/title attributes.
 *
 * Hooks:
 * - `useLocation`: Determines the current route to conditionally render the contact section.
 *
 * @returns JSX element rendering the website footer with contact info, social links, and legal information.
 */

function Footer({}: Props) {
    const { pathname } = useLocation();
    const isContactPage: boolean = pathname.startsWith("/contact");

    return (
        <footer className={styles.footer}>
            <div className={styles.footerActions}>
                {!isContactPage && (
                    <div>
                        <p>Envianos un correo personalizado</p>
                        <NavLink
                            className={["button", "buttonTerciary"].join(" ")}
                            to={`/${PATHS.contact}`}
                        >
                            <MdOutlineEmail />
                            Contacto
                        </NavLink>
                    </div>
                )}
            </div>
            <div className={styles.footerData}>
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
            <div className={styles.footerTerms}>
                <p>© [2025] Chessmate. Todos los derechos reservados.</p>
                <p>
                    Desarrollado con pasión por el ajedrez | Política de
                    privacidad | Términos y condiciones
                </p>
                <FigureImage
                    src={LOGO_IMAGE.image}
                    alt={LOGO_IMAGE.alt}
                    title={LOGO_IMAGE.alt}
                    width={LOGO_IMAGE.width}
                    height={LOGO_IMAGE.height}
                />
            </div>
        </footer>
    );
}

export default Footer;
