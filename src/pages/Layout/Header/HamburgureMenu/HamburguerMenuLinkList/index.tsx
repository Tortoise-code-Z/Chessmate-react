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

function HamburguerMenuLinkList({ handleSignOut, setIsOpen }: Props) {
    const { user } = useUserAuthStore();
    return (
        <ul className={[styles.linksList].join(" ")}>
            {user ? (
                <NavLink
                    className={["button", "buttonSecondary"].join(" ")}
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    to={`/${PATHS.dashboard}`}
                >
                    Mi portal
                </NavLink>
            ) : (
                <NavLink
                    className={["button", "buttonSecondary"].join(" ")}
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    to={`${PATHS.index}`}
                >
                    Inicio
                </NavLink>
            )}
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
            {user && (
                <Button
                    onClick={() => {
                        setIsOpen(false);
                        handleSignOut();
                    }}
                    variant="Red"
                >
                    <FaSignOutAlt /> Cerrar sesión
                </Button>
            )}

            {!user && (
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
