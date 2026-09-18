import { useTranslation } from "react-i18next";
import TitleHx from "../../../TitleHx";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import styles from "./TextsFirstLogin.module.css";

/** Mensaje de bienvenida del profesor en el primer inicio de sesión. */
function TextsFirstLogin() {
    const { user } = useUserAuthStore();
    const { t } = useTranslation("professor");
    return (
        <>
            <TitleHx classNames={[styles.welcomeTitle]} level={2}>
                {t("greeting")}{" "}
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    {t("firstLogin.titleHighlight")}
                </span>{" "}
                {t("firstLogin.titleEnd")}
            </TitleHx>

            <div className={styles.msgContainer}>
                <p>
                    {t("firstLogin.p1pre")}{" "}
                    <span
                        className={["span-compl-color", "text-medium"].join(
                            " "
                        )}
                    >
                        {user ? user.username : t("firstLogin.defaultStudent")}
                    </span>
                </p>
                <p className={styles.respPar2}>{t("firstLogin.p2")}</p>
                <p className={["text-medium", styles.respPar].join(" ")}>
                    {t("firstLogin.p3")}
                </p>
            </div>
        </>
    );
}

export default TextsFirstLogin;
