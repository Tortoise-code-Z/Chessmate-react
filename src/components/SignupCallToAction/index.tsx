import { NavLink } from "react-router-dom";
import { paths } from "../../consts/paths";
import { PiSignInBold } from "react-icons/pi";
import styles from "./SignupCallToAction.module.css";

type Props = {};

function SignupCallToAction({}: Props) {
    return (
        <section className={[styles.signUpCallToAction].join(" ")}>
            <div className={[styles.titleContainer].join(" ")}>
                <h2>
                    <span className={["span-pr-color"].join(" ")}>
                        Regístrate
                    </span>
                    <span>Y comimenza a aprender</span>
                </h2>
                <p>Accede a cursos gratuitos y lecciones exclusivas</p>
            </div>
            <NavLink
                className={["button buttonPrimary", styles.signinAction].join(
                    " "
                )}
                to={`/${paths.register}`}
            >
                <PiSignInBold />
                Registrarme
            </NavLink>
        </section>
    );
}

export default SignupCallToAction;
