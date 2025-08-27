import { LOGO_IMAGE } from "../../consts/images";
import { LoginSchemaValues } from "../../Schemas/loginSchema";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";
import FigureImage from "../../components/FigureImage";
import LoginForm from "./LoginForm";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";

type Props = {};

function Login({}: Props) {
    const { mutate, isPending } = useLogin();

    const { state: feedBackState, setState: setFeedbackState } =
        useFeedbackMessageStore();

    const handleSubmit = (data: LoginSchemaValues) => {
        mutate({
            username: data.username,
            password: data.password,
        });
    };

    return (
        <>
            {feedBackState && (
                <FeedbackMessage
                    onClose={() => setFeedbackState(false)}
                    position="top"
                />
            )}
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

                <LoginForm handleSubmit={handleSubmit} isPending={isPending} />
            </section>
        </>
    );
}

export default Login;
