import { NavLink } from "react-router-dom";
import InputGroup from "../../../../components/InputGroup";
import { registerSchemaValues } from "../../../../Schemas/registerSchema";
import styles from "./RegisterFormActions.module.css";
import { paths } from "../../../../consts/paths";
import Button from "../../../../components/Button";
import { ClipLoader } from "react-spinners";
import { FaUserPlus } from "react-icons/fa";

type Props = {
    isPending: boolean;
};

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
                    to={`${paths.index}`}
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
                to={`/${paths.login}`}
            >
                ¿Ya tienes una cuenta? Inicia sesión aquí.
            </NavLink>
        </div>
    );
}

export default RegisterFormActions;
