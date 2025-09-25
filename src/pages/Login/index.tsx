import { LOGO_IMAGE } from "../../consts/images";
import { LoginSchemaValues } from "../../Schemas/loginSchema";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";
import FigureImage from "../../components/FigureImage";
import LoginForm from "./LoginForm";
import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";
import FeedbackListener from "../../components/FeedbackListener";
import { AnimatedInView } from "../../components/AnimatedInView";

type Props = {};

/**
 * Login page component for the Chessmate application.
 *
 * Features:
 * - Displays the application logo and page title.
 * - Renders the login form and handles submission.
 * - Shows a persistent feedback message at the top of the page.
 *
 * Hooks:
 * - `useLogin`: Custom hook to handle login mutation.
 *
 * State:
 * - `isPending`: Indicates if the login request is currently processing.
 *
 * Functions:
 * - `handleSubmit(data: LoginSchemaValues)`: Calls `mutate` from `useLogin` with username and password.
 *
 * @returns JSX element rendering the login page.
 */

function Login({}: Props) {
    const { mutate, isPending } = useLogin();

    const handleSubmit = (data: LoginSchemaValues) => {
        mutate({
            username: data.username,
            password: data.password,
        });
    };

    return (
        <>
            <FeedbackListener />
            <FeedbackMessage position="top" time="infinite" />
            <AnimatedInView>
                <section className={styles.login}>
                    <div className={styles.logoContainer}>
                        <TitleHx>Iniciar sesión</TitleHx>
                        <FigureImage
                            src={LOGO_IMAGE.image}
                            alt={LOGO_IMAGE.alt}
                            title={LOGO_IMAGE.alt}
                            width={LOGO_IMAGE.width}
                            height={LOGO_IMAGE.height}
                        />
                    </div>

                    <LoginForm
                        handleSubmit={handleSubmit}
                        isPending={isPending}
                    />
                </section>
            </AnimatedInView>
        </>
    );
}

export default Login;
