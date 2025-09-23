import styles from "./Register.module.css";
import { registerSchemaValues } from "../../Schemas/registerSchema";
import { SIGNIN_IMAGE } from "../../consts/images";
import { useRegister } from "../../hooks/useRegister";
import FigureImage from "../../components/FigureImage";
import RegisterForm from "./RegisterForm";
import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";
import FeedbackListener from "../../components/FeedbackListener";

type Props = {};

/**
 * Register component that renders the user registration page.
 *
 * Features:
 * - FeedbackMessage component displayed at the top for notifications.
 * - TitleHx displaying the registration title with styled text.
 * - RegisterForm handling user input and submission.
 * - FigureImage displaying a decorative image for the registration page.
 *
 * Hooks:
 * - useRegister: Handles the registration mutation and provides pending state.
 *
 * @returns JSX element rendering the complete registration page with form, feedback, and image.
 */

function Register({}: Props) {
    const { mutate, isPending } = useRegister();
    const handleSubmit = (data: registerSchemaValues) => mutate(data);

    return (
        <section className={styles.register}>
            <FeedbackListener />
            <FeedbackMessage position="top" time="infinite" />

            <div className={styles.formContainer}>
                <TitleHx classNames={[styles.title]}>
                    Regístrate
                    <span>
                        ... y <span className={"span-pr-color"}>comienza</span>{" "}
                        tu aventura
                    </span>
                </TitleHx>

                <RegisterForm
                    handleSubmit={handleSubmit}
                    isPending={isPending}
                />
            </div>

            <FigureImage
                classNames={[styles.bccImg]}
                src={SIGNIN_IMAGE.image}
                alt={SIGNIN_IMAGE.alt}
                title={SIGNIN_IMAGE.alt}
                width={SIGNIN_IMAGE.width}
                height={SIGNIN_IMAGE.height}
            />
        </section>
    );
}

export default Register;
