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
 * LoginFormActions - React component that renders the action buttons for the login form.
 *
 * Features:
 * - Includes a "Volver a inicio" link to navigate back to the home page.
 * - Includes a submit button for logging in, showing a loading spinner (`ClipLoader`) when `isPending` is true.
 * - Displays an icon (`FaUserLock`) next to the submit text when not loading.
 * - Provides a link to the registration page for users without an account.
 * - Uses CSS classes for styling buttons and layout.
 *
 * Props:
 * - `isPending`: Boolean indicating whether the login request is in progress.
 *
 * @returns JSX.Element: A set of form actions including navigation links and a submit button with loading state.
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
