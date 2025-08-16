import { NavLink } from "react-router-dom";
import styles from "./HamburguerMenu.module.css";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import { paths } from "../../../../consts/paths";
import { FaSignOutAlt } from "react-icons/fa";
import Button from "../../../../components/Button";
import { FaXmark } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";

type Props = {
    handleSignOut: () => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function HamburguerMenu({ handleSignOut, setIsOpen }: Props) {
    const { user } = useUserAuthStore();
    return (
        <div className={[styles.container].join(" ")}>
            <nav className={[styles.hamburguerMenu].join(" ")}>
                <Button
                    classNames={[styles.close]}
                    onClick={() => setIsOpen(false)}
                    variant="Secondary"
                >
                    <FaXmark />
                </Button>
                <ul className={[styles.linksList].join(" ")}>
                    {user ? (
                        <NavLink
                            className={["button", "buttonSecondary"].join(" ")}
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            to={`${paths.dashboard}`}
                        >
                            Mi portal
                        </NavLink>
                    ) : (
                        <NavLink
                            className={["button", "buttonSecondary"].join(" ")}
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            to={`${paths.index}`}
                        >
                            Inicio
                        </NavLink>
                    )}
                    <NavLink
                        className={["button", "buttonSecondary"].join(" ")}
                        to={`${paths.courses}`}
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        Cursos
                    </NavLink>
                    <NavLink
                        className={["button", "buttonSecondary"].join(" ")}
                        to={`${paths.contact}`}
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
                            to={`${paths.login}`}
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            Iniciar sesión
                        </NavLink>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default HamburguerMenu;
