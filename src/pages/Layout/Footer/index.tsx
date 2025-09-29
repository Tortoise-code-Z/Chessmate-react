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
 * Footer - React component that renders the footer section of the application.
 *
 * Features:
 * - Displays contact information including phone number and email.
 * - Conditionally shows a "Contact" button linking to the contact page, except on the contact page itself.
 * - Provides social media links with icons (Instagram and YouTube).
 * - Shows copyright and legal information.
 * - Includes the platform logo via `FigureImage`.
 * - Uses `useLocation` to determine the current route for conditional rendering.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A styled footer with contact info, social links, legal text, and logo.
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
