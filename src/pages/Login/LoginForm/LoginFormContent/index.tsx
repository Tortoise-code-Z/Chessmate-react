import InputGroup from "../../../../components/InputGroup";
import { LoginSchemaValues } from "../../../../Schemas/loginSchema";

type Props = {};

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
