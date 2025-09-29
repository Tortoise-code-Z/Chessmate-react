import { NavLink } from "react-router-dom";
import styles from "./UserSesionActions.module.css";
import { PATHS } from "../../../../../consts/paths";
import { PiSignInBold } from "react-icons/pi";
import { Dispatch, SetStateAction } from "react";
import HamburguerMenuButton from "../../HamburguerMenuButton";

type Props = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * UserSesionActions - React component that displays registration and login actions
 * for users who are not authenticated.
 *
 * Features:
 * - Provides a "Registrarme" button linking to the registration page with an icon (`PiSignInBold`).
 * - Provides an "Iniciar sesión" button linking to the login page.
 * - Includes a `HamburguerMenuButton` to open the hamburger menu.
 * - Styled using CSS classes for layout and responsive design.
 *
 * Props:
 * - `setIsOpen`: Function to toggle the visibility of the hamburger menu.
 *
 * @returns JSX.Element: A user action panel with registration, login links, and a hamburger menu button.
 */

function UserSesionActions({ setIsOpen }: Props) {
    return (
        <div className={styles.userActions}>
            <NavLink
                className={[
                    "button",
                    "buttonPrimary",
                    styles.registerLink,
                ].join(" ")}
                to={PATHS.register}
                title="Registrarme"
            >
                <PiSignInBold />
                Registrarme
            </NavLink>
            <NavLink
                className={["button", "buttonSecondary", styles.loginLink].join(
                    " "
                )}
                to={PATHS.login}
                title="Iniciar sesion"
            >
                Iniciar sesión
            </NavLink>
            <HamburguerMenuButton
                onClick={() => {
                    setIsOpen(true);
                }}
            />
        </div>
    );
}

export default UserSesionActions;
