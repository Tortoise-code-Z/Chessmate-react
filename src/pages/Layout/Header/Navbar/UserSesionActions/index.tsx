import { NavLink } from "react-router-dom";
import styles from "./UserSesionActions.module.css";
import { PATHS } from "../../../../../consts/paths";
import { PiSignInBold } from "react-icons/pi";
import { Dispatch, SetStateAction } from "react";
import HamburguerMenuButton from "../../HamburguerMenuButton";

type Props = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function UserSesionActions({ setIsOpen }: Props) {
    return (
        <div className={styles.userActions}>
            <NavLink
                className={[
                    "button",
                    "buttonPrimary",
                    styles.registerLink,
                ].join(" ")}
                to={`/${PATHS.register}`}
                title="Registrarme"
            >
                <PiSignInBold />
                Registrarme
            </NavLink>
            <NavLink
                className={["button", "buttonSecondary", styles.loginLink].join(
                    " "
                )}
                to={`/${PATHS.login}`}
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
