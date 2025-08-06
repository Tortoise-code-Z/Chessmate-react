import { NavLink } from "react-router-dom";
import Form from "../../components/Form";
import InputGroup from "../../components/InputGroup";
import { LOGO_IMAGE } from "../../consts/images";
import { loginSchema, LoginSchemaValues } from "../../Schemas/loginSchema";
import styles from "./Login.module.css";
import { paths } from "../../consts/paths";
import Button from "../../components/Button";
import { FaUserLock } from "react-icons/fa";
import { useLogin } from "../../hooks/useLogin";
import { ClipLoader } from "react-spinners";

type Props = {};

function Login({}: Props) {
    const { mutate, error, isPending } = useLogin();

    return (
        <section className={[styles.login].join(" ")}>
            {error && (
                <p className={[styles.loginError].join(" ")}>
                    {error?.message}
                </p>
            )}
            <figure>
                <img
                    src={LOGO_IMAGE.image}
                    alt={LOGO_IMAGE.alt}
                    title={LOGO_IMAGE.alt}
                    width={LOGO_IMAGE.width}
                    height={LOGO_IMAGE.height}
                />
            </figure>
            <Form<LoginSchemaValues>
                schema={loginSchema}
                onSubmit={(data) => {
                    mutate({
                        username: data.username,
                        password: data.password,
                    });
                }}
            >
                <InputGroup<LoginSchemaValues>
                    name={"username"}
                    label="Nombre de usuario"
                    placeholder="chessmate_33..."
                    errorMsg={true}
                    inputType="text"
                />
                <InputGroup<LoginSchemaValues>
                    name={"password"}
                    label="Contraseña"
                    placeholder="Contraseña..."
                    errorMsg={true}
                    inputType="password"
                />
                <div className={[styles.actions].join(" ")}>
                    <div className={[styles.actionBtns].join(" ")}>
                        <NavLink
                            className={["button", "buttonSecondary"].join(" ")}
                            to={`${paths.index}`}
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
                        className={["linkToLoginSigin"].join(" ")}
                        to={`/${paths.register}`}
                    >
                        ¿Aún no tienes una cuenta? Regístrate aquí.
                    </NavLink>
                </div>
            </Form>
        </section>
    );
}

export default Login;
