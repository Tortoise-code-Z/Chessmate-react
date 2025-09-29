import { NavLink } from "react-router-dom";
import styles from "./NavbarLinkList.module.css";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import { PATHS } from "../../../../../consts/paths";

type Props = {};

/**
 * NavbarLinkList - React component that renders the main navigation links in the navbar.
 *
 * Features:
 * - Conditionally displays "Mi portal" if the user is authenticated, otherwise shows "Inicio".
 * - Always includes links to "Cursos" and "Contacto".
 * - Uses `NavLink` from `react-router-dom` for navigation with active styling.
 * - Retrieves user authentication status using `useUserAuthStore`.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A list of navigation links for the main navbar.
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
