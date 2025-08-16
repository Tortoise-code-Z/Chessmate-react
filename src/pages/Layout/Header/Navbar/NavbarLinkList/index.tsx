import { NavLink } from "react-router-dom";
import styles from "./NavbarLinkList.module.css";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import { paths } from "../../../../../consts/paths";

type Props = {};

function NavbarLinkList({}: Props) {
    const { user } = useUserAuthStore();
    return (
        <ul className={styles.linksList}>
            {user ? (
                <NavLink to={`/${paths.dashboard}`} title="Ir a mi portal">
                    Mi portal
                </NavLink>
            ) : (
                <NavLink to={paths.index} title="Inicio">
                    Inicio
                </NavLink>
            )}
            <NavLink to={`/${paths.courses}`} title="Ver cursos">
                Cursos
            </NavLink>
            <NavLink to={`/${paths.contact}`} title="Contactar">
                Contacto
            </NavLink>
        </ul>
    );
}

export default NavbarLinkList;
