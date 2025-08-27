import { NavLink } from "react-router-dom";
import styles from "./LoginFormActions.module.css";
import Button from "../../../../components/Button";
import { PATHS } from "../../../../consts/paths";
import { ClipLoader } from "react-spinners";
import { FaUserLock } from "react-icons/fa";

type Props = {
    isPending: boolean;
};

function LoginFormActions({ isPending }: Props) {
    return (
        <>
            <div className={styles.actions}>
                <div className={styles.actionBtns}>
                    <NavLink
                        className={["button", "buttonSecondary"].join(" ")}
                        to={`${PATHS.index}`}
                    >
                        Volver a inicio
                    </NavLink>
                    <Button disabled={isPending} type="submit">
                        {isPending ? (
                            <>
                                <ClipLoader color="white" />
                                Cargando...
                            </>
                        ) : (
                            <>
                                <FaUserLock />
                                Iniciar sesión
                            </>
                        )}
                    </Button>
                </div>

                <NavLink
                    className={"linkToLoginSigin"}
                    to={`/${PATHS.register}`}
                >
                    ¿Aún no tienes una cuenta? Regístrate aquí.
                </NavLink>
            </div>
        </>
    );
}

export default LoginFormActions;
