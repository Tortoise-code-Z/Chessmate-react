import { useTranslation } from "react-i18next";

/** Mensaje del profesor: error al determinar si el curso está obtenido. */
function TextIsObtained() {
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
                {t("isObtained.p1")}
            </p>
            <p>{t("isObtained.p2")}</p>
            <p>{t("isObtained.p3")}</p>
            <p>{t("sorry")}</p>
        </>
    );
}

export default TextIsObtained;
