import { NavLink } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import styles from "./SignupCallToAction.module.css";
import { PATHS } from "../../../consts/paths";
import TitleHx from "../../../components/TitleHx";
import { AnimatedInView } from "../../../components/AnimatedInView";

type Props = {};

/**
 * SignupCallToAction component that prompts users to register on the platform.
 *
 * Features:
 * - `TitleHx`: Displays a call-to-action title with styled span.
 * - Paragraph highlighting access to free courses and exclusive lessons.
 * - `NavLink` styled as a button with an icon to navigate to the registration page.
 *
 * @returns JSX element rendering a sign-up call-to-action section.
 */

function SignupCallToAction({}: Props) {
    return (
        <AnimatedInView>
            <section className={styles.signUpCallToAction}>
                <div className={styles.titleContainer}>
                    <TitleHx level={2}>
                        <span className={"span-pr-color"}>Regístrate</span>
                        <span>Y comimenza a aprender</span>
                    </TitleHx>

                    <p>Accede a cursos gratuitos y lecciones exclusivas</p>
                </div>
                <NavLink
                    className={[
                        "button buttonPrimary",
                        styles.signinAction,
                    ].join(" ")}
                    to={`/${PATHS.register}`}
                >
                    <PiSignInBold />
                    Registrarme
                </NavLink>
            </section>
        </AnimatedInView>
    );
}

export default SignupCallToAction;
