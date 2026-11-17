import { useTranslation } from "react-i18next";
import { useProfessorMsgStore } from "../../../../hooks/useProfessorMsgStore";

/** Mensaje del profesor: necesita iniciar sesión/registrarse para comprar o comentar. */
function TextsNoSesion() {
    const { value } = useProfessorMsgStore();
    const { t } = useTranslation("professor");

    const verb =
        value === "cantBuySesion"
            ? t("noSession.buy")
            : t("noSession.comment");

    return (
        <>
            <p>
                <span
                    className={[
                        "span-pr-color",
                        "text-medium",
                        "size-140",
                    ].join(" ")}
                >
                    {t("greeting")}
                </span>{" "}
                {t("noSession.p1pre")} {verb} {t("noSession.p1mid")}{" "}
                <span
                    className={["span-compl-color", "text-bold-italic"].join(
                        " "
                    )}
                >
                    {value === "cantCommentHasntBuyCourse" &&
                        t("noSession.hlBuy")}
                    {(value === "cantBuySesion" ||
                        value === "cantCommentSesion") &&
                        t("noSession.hlSession")}
                </span>
                .
            </p>

            <p>{t("noSession.p2")}</p>
            <p>{t("noSession.p3")}</p>
        </>
    );
}

export default TextsNoSesion;
