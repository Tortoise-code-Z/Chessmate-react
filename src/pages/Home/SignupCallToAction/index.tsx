import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import styles from "./SignupCallToAction.module.css";
import { PATHS } from "../../../consts/paths";
import TitleHx from "../../../components/TitleHx";
import { AnimatedInView } from "../../../components/AnimatedInView";

/**
 * SignupCallToAction - Llamada a la acción para registrarse.
 */
function SignupCallToAction() {
    const { t } = useTranslation("home");
    return (
        <AnimatedInView>
            <section className={styles.signUpCallToAction}>
                <div className={styles.titleContainer}>
                    <TitleHx level={2}>
                        <span className={"span-pr-color"}>
                            {t("signup.titleHighlight")}
                        </span>
                        <span>{t("signup.titleRest")}</span>
                    </TitleHx>

                    <p>{t("signup.subtitle")}</p>
                </div>
                <NavLink
                    className={[
                        "button buttonPrimary",
                        styles.signinAction,
                    ].join(" ")}
                    to={PATHS.register}
                >
                    <PiSignInBold />
                    {t("common:session.register")}
                </NavLink>
            </section>
        </AnimatedInView>
    );
}

export default SignupCallToAction;
