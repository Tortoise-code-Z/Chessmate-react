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
import ProfessorListener from "../../components/ProfessorListenner";
import { Helmet } from "react-helmet-async";

type Props = {};

/**
 * Login - React component that renders the login page for the application.
 *
 * Features:
 * - Displays a feedback listener and message component to show notifications.
 * - Shows the platform logo and a title using `FigureImage` and `TitleHx`.
 * - Wraps the logo section in `AnimatedInView` for entrance animation.
 * - Renders `LoginForm` to capture username and password, handling submission with `useLogin` hook.
 * - Handles pending state during login submission.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A login page with animated logo, feedback messages, and login form.
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
            <Helmet>
                <title>Chessmate - Inicio de sesión</title>
            </Helmet>
            <FeedbackListener />
            <ProfessorListener />

            <FeedbackMessage position="top" time="infinite" />

            <section className={styles.login}>
                <AnimatedInView config={{ direction: "right" }}>
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
                </AnimatedInView>

                <LoginForm handleSubmit={handleSubmit} isPending={isPending} />
            </section>
        </>
    );
}

export default Login;
