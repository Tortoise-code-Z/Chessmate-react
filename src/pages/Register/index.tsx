import styles from "./Register.module.css";
import Form from "../../components/Form";
import { FaPaperPlane } from "react-icons/fa";
import {
    registerSchema,
    registerSchemaValues,
} from "../../Schemas/registerSchema";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { LOGO_IMAGE } from "../../consts/images";
import { paths } from "../../consts/paths";

type Props = {};

function Register({}: Props) {
    return (
        <div className={[styles.register].join(" ")}>
            <NavLink to={`${paths.index}`}>
                <figure>
                    <img
                        src={LOGO_IMAGE.image}
                        alt={LOGO_IMAGE.alt}
                        title="Ir a inicio"
                    />
                </figure>
            </NavLink>
            <Form<registerSchemaValues>
                onSubmit={() => {
                    alert("enviado");
                }}
                schema={registerSchema}
            >
                <div>
                    <InputGroup<registerSchemaValues>
                        label="Nombre de usuario"
                        name="username"
                        placeholder="chessmate_33..."
                        errorMsg={true}
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
                        label="Acepto las condiciones y términos."
                        labelDisplay="Row"
                        name="terms"
                        placeholder="Escriba de nuevo su contraseña..."
                        errorMsg={true}
                        inputType="checkbox"
                    />
                </div>

                <Button type="submit">
                    <FaPaperPlane />
                    Registrarme
                </Button>
            </Form>
        </div>
    );
}

export default Register;
