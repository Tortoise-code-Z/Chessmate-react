import { NavLink } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import styles from "./SignupCallToAction.module.css";
import { PATHS } from "../../../consts/paths";
import TitleHx from "../../../components/TitleHx";
import { AnimatedInView } from "../../../components/AnimatedInView";

type Props = {};

/**
 * SignupCallToAction - React component that displays a call-to-action section
 * encouraging users to register on the platform.
 *
 * Features:
 * - Wraps content in `AnimatedInView` for smooth entrance animations.
 * - Shows a prominent title using `TitleHx` with styled highlights.
 * - Includes a descriptive subtitle to motivate registration.
 * - Provides a `NavLink` styled as a button with an icon (`PiSignInBold`) linking to the registration page.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A call-to-action section prompting users to sign up with title, description, and registration button.
 */

function SignupCallToAction({}: Props) {
    return (
        <AnimatedInView>
            <section className={styles.signUpCallToAction}>
                <div className={styles.titleContainer}>
                    <TitleHx level={2}>
                        <span className={"span-pr-color"}>Regístrate</span>
                        <span>Y comienza a aprender</span>
                    </TitleHx>

                    <p>Accede a cursos gratuitos y lecciones exclusivas</p>
                </div>
                <NavLink
                    className={[
                        "button buttonPrimary",
                        styles.signinAction,
                    ].join(" ")}
                    to={PATHS.register}
                >
                    <PiSignInBold />
                    Registrarme
                </NavLink>
            </section>
        </AnimatedInView>
    );
}

export default SignupCallToAction;
