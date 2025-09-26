import { NavLink } from "react-router-dom";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import styles from "./HamburguerMenuLinkList.module.css";
import { PATHS } from "../../../../../consts/paths";
import Button from "../../../../../components/Button";
import { FaSignOutAlt } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";

type Props = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    handleSignOut: () => void;
};

/**
 * HamburguerMenuLinkList component that renders the list of navigation links inside the hamburger menu.
 *
 * Features:
 * - Conditional links based on user authentication:
 *   - Authenticated users see "Mi portal" and a sign-out button.
 *   - Unauthenticated users see "Inicio" and "Iniciar sesión".
 * - Links to "Cursos" and "Contacto" pages for all users.
 * - Clicking any link or button closes the hamburger menu using `setIsOpen`.
 * - `Button` with `FaSignOutAlt` icon for signing out.
 *
 * Hooks:
 * - `useUserAuthStore`: Retrieves the current authenticated user.
 *
 * Props:
 * - `setIsOpen` (Dispatch<SetStateAction<boolean>>): Function to toggle the menu open/close state.
 * - `handleSignOut` (function): Function to execute user sign-out.
 *
 * @returns JSX element rendering a list of navigation links for the hamburger menu with conditional user actions.
 */

function HamburguerMenuLinkList({ handleSignOut, setIsOpen }: Props) {
    const { user } = useUserAuthStore();
    return (
        <ul className={styles.linksList}>
            <NavLink
                className={["button", "buttonSecondary"].join(" ")}
                onClick={() => {
                    setIsOpen(false);
                }}
                to={user ? `/${PATHS.dashboard}` : PATHS.index}
            >
                Mi portal
            </NavLink>

            <NavLink
                className={["button", "buttonSecondary"].join(" ")}
                to={`/${PATHS.courses}`}
                onClick={() => {
                    setIsOpen(false);
                }}
            >
                Cursos
            </NavLink>
            <NavLink
                className={["button", "buttonSecondary"].join(" ")}
                to={`/${PATHS.contact}`}
                onClick={() => {
                    setIsOpen(false);
                }}
            >
                Contacto
            </NavLink>
            {user ? (
                <Button
                    onClick={() => {
                        setIsOpen(false);
                        handleSignOut();
                    }}
                    variant="Red"
                >
                    <FaSignOutAlt /> Cerrar sesión
                </Button>
            ) : (
                <NavLink
                    className={["button", "buttonSecondary"].join(" ")}
                    to={`/${PATHS.login}`}
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    Iniciar sesión
                </NavLink>
            )}
        </ul>
    );
}

export default HamburguerMenuLinkList;
