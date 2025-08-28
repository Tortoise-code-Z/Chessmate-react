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
 * RegisterFormActions component that renders the action buttons and terms checkbox for the registration form.
 *
 * Features:
 * - InputGroup checkbox for accepting terms and conditions with label displayed in row format.
 * - "Volver a inicio" button navigating to the main index page.
 * - Submit button for registration showing a loading spinner and disabled state when pending.
 * - Link to the login page for users who already have an account.
 *
 * Props:
 * - isPending: Boolean indicating if the registration request is in progress.
 *
 * @returns JSX element rendering the registration form actions, terms checkbox, and navigation links.
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
