import { NavLink } from "react-router-dom";
import styles from "./LoginFormActions.module.css";
import Button from "../../../../components/Button";
import { PATHS } from "../../../../consts/paths";
import { ClipLoader } from "react-spinners";
import { FaUserLock } from "react-icons/fa";

type Props = {
    isPending: boolean;
};

/**
 * LoginFormActions component that renders the action buttons and links for the login form.
 *
 * Features:
 * - "Back to Home" button navigating to the main index page.
 * - Submit button for logging in, showing a loading spinner and disabled state when pending.
 * - Link to the registration page for users without an account.
 *
 * Props:
 * - isPending: Boolean indicating if the login action is in progress.
 *
 * @returns JSX element rendering the login form actions section with buttons and links.
 */

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
