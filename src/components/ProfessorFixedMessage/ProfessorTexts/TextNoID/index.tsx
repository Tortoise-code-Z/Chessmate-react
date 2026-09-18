import { useTranslation } from "react-i18next";

/** Mensaje del profesor: compra cancelada por falta de ID de curso. */
function TextNoID() {
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
                {t("noId.p1")}
            </p>
            <p>{t("noId.p2")}</p>
            <p>{t("sorry")}</p>
        </>
    );
}

export default TextNoID;
