import styles from "./Register.module.css";
import { registerSchemaValues } from "../../Schemas/registerSchema";
import { SIGNIN_IMAGE } from "../../consts/images";
import { useRegister } from "../../hooks/useRegister";
import FigureImage from "../../components/FigureImage";
import RegisterForm from "./RegisterForm";
import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";
import FeedbackListener from "../../components/FeedbackListener";
import { AnimatedInView } from "../../components/AnimatedInView";
import ProfessorListener from "../../components/ProfessorListenner";
import { Helmet } from "react-helmet-async";

type Props = {};

/**
 * Register - React component that renders the user registration page.
 *
 * Features:
 * - Displays a registration form via `RegisterForm` and handles submission with `useRegister` hook.
 * - Shows animated title and form container using `AnimatedInView`.
 * - Displays feedback messages using `FeedbackMessage` and listens for feedback events with `FeedbackListener`.
 * - Shows a decorative image with `FigureImage` and entry animation.
 * - Handles form submission state (`isPending`) and passes it to the form component.
 *
 * Props:
 * - None
 *
 * @returns JSX.Element: A registration page with animated title, form, feedback messages, and a decorative image.
 */

function Register({}: Props) {
    const { mutate, isPending } = useRegister();
    const handleSubmit = (data: registerSchemaValues) => mutate(data);

    return (
        <>
            <Helmet>
                <title>Chessmate - Registro</title>
            </Helmet>
            <section className={styles.register}>
                <ProfessorListener />
                <FeedbackListener />
                <FeedbackMessage position="top" time="infinite" />
                <AnimatedInView config={{ direction: "right" }}>
                    <div className={styles.formContainer}>
                        <TitleHx classNames={[styles.title]}>
                            Regístrate
                            <span>
                                ... y{" "}
                                <span className={"span-pr-color"}>
                                    comienza
                                </span>{" "}
                                tu aventura
                            </span>
                        </TitleHx>

                        <RegisterForm
                            handleSubmit={handleSubmit}
                            isPending={isPending}
                        />
                    </div>
                </AnimatedInView>

                <FigureImage
                    classNames={[styles.bccImg]}
                    src={SIGNIN_IMAGE.image}
                    alt={SIGNIN_IMAGE.alt}
                    title={SIGNIN_IMAGE.alt}
                    width={SIGNIN_IMAGE.width}
                    height={SIGNIN_IMAGE.height}
                    animatedOptions={{ direction: "left" }}
                />
            </section>
        </>
    );
}

export default Register;
