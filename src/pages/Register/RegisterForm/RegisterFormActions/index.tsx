import { NavLink } from "react-router-dom";
import InputGroup from "../../../../components/InputGroup";
import { registerSchemaValues } from "../../../../Schemas/registerSchema";
import styles from "./RegisterFormActions.module.css";
import { PATHS } from "../../../../consts/paths";
import Button from "../../../../components/Button";
import { ClipLoader } from "react-spinners";
import { FaUserPlus } from "react-icons/fa";

type Props = {
    isPending: boolean;
};

/**
 * RegisterFormActions - React component that renders the action buttons and terms checkbox for the registration form.
 *
 * Features:
 * - Includes a checkbox input for accepting terms and conditions using `InputGroup`.
 * - Provides a "Volver a inicio" navigation link using `NavLink`.
 * - Provides a submit button that displays a loading spinner (`ClipLoader`) when `isPending` is true.
 * - Displays an icon (`FaUserPlus`) on the submit button when not pending.
 * - Includes a navigation link to the login page for users who already have an account.
 * - Uses CSS modules for styling.
 *
 * Props:
 * - `isPending`: Boolean indicating if the form submission is in progress.
 *
 * @returns JSX.Element: Action buttons, terms checkbox, and navigation links for the registration form.
 */

function RegisterFormActions({ isPending }: Props) {
    return (
        <div className={styles.actions}>
            <InputGroup<registerSchemaValues>
                label="Acepto las condiciones y términos."
                labelDisplay="Row"
                name="terms"
                placeholder="Escriba de nuevo su contraseña..."
                errorMsg={true}
                inputType="checkbox"
                labelReverse={true}
            />

            <div className={styles.actionBtns}>
                <NavLink
                    className={["button", "buttonSecondary"].join(" ")}
                    to={`${PATHS.index}`}
                >
                    Volver a inicio
                </NavLink>
                <Button type="submit">
                    {isPending ? (
                        <>
                            <ClipLoader color="white" />
                            Cargando...
                        </>
                    ) : (
                        <>
                            <FaUserPlus />
                            Registrarme
                        </>
                    )}
                </Button>
            </div>

            <NavLink
                className={["linkToLoginSigin"].join(" ")}
                to={`/${PATHS.login}`}
            >
                ¿Ya tienes una cuenta? Inicia sesión aquí.
            </NavLink>
        </div>
    );
}

export default RegisterFormActions;
