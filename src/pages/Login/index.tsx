import { LOGO_IMAGE } from "../../consts/images";
import { LoginSchemaValues } from "../../Schemas/loginSchema";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";
import FigureImage from "../../components/FigureImage";
import LoginForm from "./LoginForm";

type Props = {};

function Login({}: Props) {
    const { mutate, error, isPending } = useLogin();

    const handleSubmit = (data: LoginSchemaValues) => {
        mutate({
            username: data.username,
            password: data.password,
        });
    };

    return (
        <section className={styles.login}>
            {error && <p className={styles.loginError}>{error?.message}</p>}

            <FigureImage
                src={LOGO_IMAGE.image}
                alt={LOGO_IMAGE.alt}
                title={LOGO_IMAGE.alt}
                width={LOGO_IMAGE.width}
                height={LOGO_IMAGE.height}
            />

            <LoginForm handleSubmit={handleSubmit} isPending={isPending} />
        </section>
    );
}

export default Login;
