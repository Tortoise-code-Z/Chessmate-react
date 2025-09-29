import InputGroup from "../../../../components/InputGroup";
import { LoginSchemaValues } from "../../../../Schemas/loginSchema";

type Props = {};

/**
 * LoginFormContent - React component that renders the input fields for the login form.
 *
 * Features:
 * - Includes a username input field with label and placeholder.
 * - Includes a password input field with label and placeholder.
 * - Displays validation error messages for both fields.
 * - Uses generic `InputGroup` component for integration with form validation.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: The input fields for username and password within the login form.
 */

function LoginFormContent({}: Props) {
    return (
        <>
            <InputGroup<LoginSchemaValues>
                name="username"
                label="Nombre de usuario"
                placeholder="chessmate_33..."
                errorMsg={true}
                inputType="text"
            />
            <InputGroup<LoginSchemaValues>
                name="password"
                label="Contraseña"
                placeholder="Contraseña..."
                errorMsg={true}
                inputType="password"
            />
        </>
    );
}

export default LoginFormContent;
