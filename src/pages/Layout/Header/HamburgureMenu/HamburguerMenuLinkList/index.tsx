import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import styles from "./HamburguerMenuLinkList.module.css";
import { PATHS } from "../../../../../consts/paths";
import Button from "../../../../../components/Button";
import { FaSignOutAlt } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import LanguageSelector from "../../../../../components/LanguageSelector";

type Props = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    handleSignOut: () => void;
};

/**
 * HamburguerMenuLinkList - React component that renders a list of navigation links
 * for the hamburger menu, including conditional user actions.
 *
 * Features:
 * - Provides links to the user's portal, courses, and contact page.
 * - Shows a "Cerrar sesión" button if the user is logged in, or "Iniciar sesión" link if not.
 * - Closes the hamburger menu (`setIsOpen(false)`) on any link or button click.
 * - Uses `useUserAuthStore` to determine the user's authentication status.
 * - Styled using CSS classes and reusable `Button` component with icons.
 *
 * Props:
 * - `setIsOpen`: Function to toggle the visibility of the hamburger menu.
 * - `handleSignOut`: Function to sign out the user.
 *
 * @returns JSX.Element: A styled list of navigation links for the hamburger menu with conditional user actions.
 */

function HamburguerMenuLinkList({ handleSignOut, setIsOpen }: Props) {
    const { user } = useUserAuthStore();
    const { t } = useTranslation();
    return (
        <ul className={styles.linksList}>
            <li role="none">
                <LanguageSelector />
            </li>
            <NavLink
                className={["button", "buttonSecondary"].join(" ")}
                onClick={() => {
                    setIsOpen(false);
                }}
                to={user ? PATHS.dashboard : PATHS.index}
            >
                {user ? t("nav.portal") : t("nav.home")}
            </NavLink>

            <NavLink
                className={["button", "buttonSecondary"].join(" ")}
                to={PATHS.courses}
                onClick={() => {
                    setIsOpen(false);
                }}
            >
                {t("nav.courses")}
            </NavLink>
            <NavLink
                className={["button", "buttonSecondary"].join(" ")}
                to={PATHS.contact}
                onClick={() => {
                    setIsOpen(false);
                }}
            >
                {t("nav.contact")}
            </NavLink>
            {user ? (
                <Button
                    onClick={() => {
                        setIsOpen(false);
                        handleSignOut();
                    }}
                    variant="Red"
                >
                    <FaSignOutAlt /> {t("session.logout")}
                </Button>
            ) : (
                <NavLink
                    className={["button", "buttonSecondary"].join(" ")}
                    to={PATHS.login}
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    {t("session.login")}
                </NavLink>
            )}
        </ul>
    );
}

export default HamburguerMenuLinkList;
