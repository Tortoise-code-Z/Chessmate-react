import InputGroup from "../../../../components/InputGroup";
import { LoginSchemaValues } from "../../../../Schemas/loginSchema";

type Props = {};

/**
 * LoginFormContent component that renders the input fields for the login form.
 *
 * Features:
 * - InputGroup for "username" with label, placeholder, and error message display.
 * - InputGroup for "password" with label, placeholder, and error message display.
 *
 * @returns JSX element rendering the login form's input fields.
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
