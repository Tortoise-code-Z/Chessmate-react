import { NavLink } from "react-router-dom";
import styles from "./NavbarLinkList.module.css";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import { PATHS } from "../../../../../consts/paths";

type Props = {};

/**
 * NavbarLinkList component renders the main navigation links for the navbar.
 *
 * Features:
 * - Dynamically displays either "Mi portal" or "Inicio" depending on user authentication status.
 * - Includes static links to "Cursos" and "Contacto".
 * - Uses `NavLink` from `react-router-dom` for navigation with proper `title` attributes.
 *
 * Hooks:
 * - `useUserAuthStore`: Checks whether the user is authenticated to conditionally render links.
 *
 * Props: none
 *
 * @returns JSX element rendering a list of navigation links for the navbar.
 */

function NavbarLinkList({}: Props) {
    const { user } = useUserAuthStore();
    return (
        <ul className={styles.linksList}>
            {user ? (
                <NavLink to={`/${PATHS.dashboard}`} title="Ir a mi portal">
                    Mi portal
                </NavLink>
            ) : (
                <NavLink to={PATHS.index} title="Inicio">
                    Inicio
                </NavLink>
            )}
            <NavLink to={`/${PATHS.courses}`} title="Ver cursos">
                Cursos
            </NavLink>
            <NavLink to={`/${PATHS.contact}`} title="Contactar">
                Contacto
            </NavLink>
        </ul>
    );
}

export default NavbarLinkList;
