import { useTranslation } from "react-i18next";

/** Mensaje del profesor: no puede comentar sin haber comprado el curso. */
function TextsCantCommenHasntBuy() {
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
                {t("cantComment.p1pre")}{" "}
                <span
                    className={["span-compl-color", "text-bold-italic"].join(
                        " "
                    )}
                >
                    {t("cantComment.p1highlight")}
                </span>
                .
            </p>
            <p>{t("cantComment.p2")}</p>
            <p>{t("cantComment.p3")}</p>
        </>
    );
}

export default TextsCantCommenHasntBuy;
