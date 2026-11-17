import { useTranslation } from "react-i18next";

/** Mensaje del profesor: no se ha podido recuperar el precio del curso. */
function TextNoPrice() {
    const { t } = useTranslation("professor");
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
                {t("noPrice.p1")}
            </p>
            <p>{t("noPrice.p2")}</p>
            <p>{t("sorry")}</p>
        </>
    );
}

export default TextNoPrice;
