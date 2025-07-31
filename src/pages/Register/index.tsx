import styles from "./Register.module.css";
import Form from "../../components/Form";
import {
    registerSchema,
    registerSchemaValues,
} from "../../Schemas/registerSchema";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { SIGNIN_IMAGE } from "../../consts/images";
import { paths } from "../../consts/paths";
import ButtonGroupSelect from "../../components/ButtonGroupSelect";
import { CHESS_LEVEL } from "../../consts/general";
import { FaUserPlus } from "react-icons/fa";

type Props = {};

function Register({}: Props) {
    return (
        <section className={[styles.register].join(" ")}>
            <Form<registerSchemaValues>
                onSubmit={(data: registerSchemaValues) => console.log(data)}
                schema={registerSchema}
                defaultValues={{
                    title: "Sin título",
                }}
            >
                {/* <LightComponent top={30} right={30} /> */}

                <h2>
                    Regístrate
                    <span>
                        ... y{" "}
                        <span className={["span-pr-color"].join(" ")}>
                            comienza
                        </span>{" "}
                        tu aventura
                    </span>
                </h2>
                <div className={[styles.formContent].join(" ")}>
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

                <div className={[styles.actions].join(" ")}>
                    <InputGroup<registerSchemaValues>
                        label="Acepto las condiciones y términos."
                        labelDisplay="Row"
                        name="terms"
                        placeholder="Escriba de nuevo su contraseña..."
                        errorMsg={true}
                        inputType="checkbox"
                        labelReverse={true}
                    />

                    <div className={[styles.actionBtns].join(" ")}>
                        <NavLink
                            className={["button", "buttonSecondary"].join(" ")}
                            to={`${paths.index}`}
                        >
                            Volver a inicio
                        </NavLink>
                        <Button type="submit">
                            <FaUserPlus />
                            Registrarme
                        </Button>
                    </div>

                    <NavLink
                        className={["linkToLoginSigin"].join(" ")}
                        to={`/${paths.login}`}
                    >
                        ¿Ya tienes una cuenta? Inicia sesión aquí.
                    </NavLink>
                </div>
            </Form>
            <figure className={[styles.bccImg].join(" ")}>
                <img
                    src={SIGNIN_IMAGE.image}
                    alt={SIGNIN_IMAGE.alt}
                    title={SIGNIN_IMAGE.alt}
                    width={SIGNIN_IMAGE.width}
                    height={SIGNIN_IMAGE.height}
                />
            </figure>
        </section>
    );
}

export default Register;
