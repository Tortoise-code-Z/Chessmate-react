import { NavLink } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import styles from "./Navbar.module.css";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import { AVATAR_DEFAULT_IMAGE, LOGO_IMAGE } from "../../../../consts/images";
import Button from "../../../../components/Button";
import { paths } from "../../../../consts/paths";
import { FaSignOutAlt } from "react-icons/fa";
import HamburguerMenuButton from "../HamburguerMenuButton";
import { Dispatch, SetStateAction } from "react";
import { UseMutateFunction } from "@tanstack/react-query";

type Props = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    mutate: UseMutateFunction<void, Error, void, unknown>;
};

function Navbar({ setIsOpen, mutate }: Props) {
    const { user } = useUserAuthStore();

    const userOptions = (
        <div className={[styles.userOptions].join(" ")}>
            <div className={[styles.userData].join(" ")}>
                <figure className={[styles.userAvatar].join(" ")}>
                    <img
                        src={AVATAR_DEFAULT_IMAGE.image}
                        alt="Avatar"
                        title="Avatar"
                        width={AVATAR_DEFAULT_IMAGE.width}
                        height={AVATAR_DEFAULT_IMAGE.height}
                    />
                </figure>
                <p className={[styles.username].join(" ")}>{user?.username}</p>
            </div>
            <Button
                classNames={[styles.signoutButton]}
                onClick={() => {
                    mutate();
                }}
                variant="Red"
            >
                <FaSignOutAlt /> Cerrar sesión
            </Button>
            <HamburguerMenuButton
                onClick={() => {
                    setIsOpen(true);
                }}
            />
        </div>
    );

    const userActions = (
        <div className={[styles.userActions].join(" ")}>
            <NavLink
                className={[
                    "button",
                    "buttonPrimary",
                    styles.registerLink,
                ].join(" ")}
                to={`/${paths.register}`}
                title="Registrarme"
            >
                <PiSignInBold />
                Registrarme
            </NavLink>
            <NavLink
                className={["button", "buttonSecondary", styles.loginLink].join(
                    " "
                )}
                to={`/${paths.login}`}
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

    return (
        <nav className={[styles.navbar].join(" ")}>
            <div className={[styles.linksContainer].join(" ")}>
                <figure className={[styles.logo].join(" ")}>
                    <img
                        src={LOGO_IMAGE.image}
                        alt="Logo Chessmate"
                        title="Logo Chessmate"
                        width={LOGO_IMAGE.width}
                        height={LOGO_IMAGE.height}
                    />
                </figure>
                <ul className={[styles.linksList].join(" ")}>
                    {user ? (
                        <NavLink
                            to={`/${paths.dashboard}`}
                            title="Ir a mi portal"
                        >
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
            </div>

            {user ? userOptions : userActions}
        </nav>
    );
}

export default Navbar;
