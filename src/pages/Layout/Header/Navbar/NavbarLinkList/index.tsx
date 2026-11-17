import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./NavbarLinkList.module.css";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import { PATHS } from "../../../../../consts/paths";

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

function NavbarLinkList() {
    const { user } = useUserAuthStore();
    const { t } = useTranslation();
    return (
        <ul className={styles.linksList}>
            {user ? (
                <NavLink to={PATHS.dashboard} title={t("nav.titlePortal")}>
                    {t("nav.portal")}
                </NavLink>
            ) : (
                <NavLink to={PATHS.index} title={t("nav.titleHome")}>
                    {t("nav.home")}
                </NavLink>
            )}
            <NavLink to={PATHS.courses} title={t("nav.titleCourses")}>
                {t("nav.courses")}
            </NavLink>
            <NavLink to={PATHS.contact} title={t("nav.titleContact")}>
                {t("nav.contact")}
            </NavLink>
        </ul>
    );
}

export default NavbarLinkList;
