import { NavLink } from "react-router-dom";
import styles from "./NavbarLinkList.module.css";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import { PATHS } from "../../../../../consts/paths";

type Props = {};

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
