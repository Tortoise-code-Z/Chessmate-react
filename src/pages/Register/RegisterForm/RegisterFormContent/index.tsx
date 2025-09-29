import ButtonGroupSelect from "../../../../components/ButtonGroupSelect";
import InputGroup from "../../../../components/InputGroup";
import { CHESS_LEVEL } from "../../../../consts/general";
import { registerSchemaValues } from "../../../../Schemas/registerSchema";
import styles from "./RegisterFormContent.module.css";

type Props = {};

/**
 * RegisterFormContent - React component that renders the input fields for the registration form.
 *
 * Features:
 * - Includes inputs for username, password, repeat password, email, and ELO using `InputGroup`.
 * - Provides a selectable title input using `ButtonGroupSelect` with predefined chess levels (`CHESS_LEVEL`).
 * - Handles validation errors and displays error messages for each input field.
 * - Uses CSS modules for styling.
 *
 * Props:
 * - None
 *
 * @returns JSX.Element: The main content of the registration form with all required input fields and selection options.
 */

function RegisterFormContent({}: Props) {
    return (
        <div className={styles.formContent}>
            <InputGroup<registerSchemaValues>
                label="Nombre de usuario"
                name="username"
                placeholder="chessmate_33..."
                errorMsg={true}
            />
            <InputGroup<registerSchemaValues>
                label="Contraseña"
                name="password"
                placeholder="Su contraseña..."
                errorMsg={true}
                inputType="password"
            />
            <InputGroup<registerSchemaValues>
                label="Repetir contraseña"
                name="repeatPassword"
                placeholder="Escriba de nuevo su contraseña..."
                errorMsg={true}
                inputType="password"
            />
            <InputGroup<registerSchemaValues>
                label="Correo electrónico"
                name="email"
                placeholder="chessmate_33@chessmate.com..."
                errorMsg={true}
            />
            <InputGroup<registerSchemaValues>
                label="ELO"
                name="elo"
                placeholder="1500..."
                errorMsg={true}
            />
            <ButtonGroupSelect
                label="Título"
                values={[...CHESS_LEVEL]}
                name="title"
            />
        </div>
    );
}

export default RegisterFormContent;
