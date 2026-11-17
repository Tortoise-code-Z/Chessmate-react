import { useTranslation } from "react-i18next";
import { AnimatedInView } from "../../../components/AnimatedInView";
import FigureImage from "../../../components/FigureImage";
import LightComponent from "../../../components/LightComponent";
import TitleHx from "../../../components/TitleHx";
import { LOGO_IMAGE } from "../../../consts/images";
import styles from "./CloseHomeSection.module.css";

/**
 * CloseHomeSection - Sección de cierre de la Home (agradecimiento + logo).
 */
function CloseHomeSection() {
    const { t } = useTranslation("home");
    return (
        <AnimatedInView>
            <section className={styles.closeHomeSection}>
                <LightComponent top={35} right={65} />
                <TitleHx level={2}>
                    <span className={"size-80"}>{t("close.thanks")}</span>
                    <span>
                        <span
                            className={[
                                "span-pr-color",
                                "size-140",
                                "text-regular",
                            ].join(" ")}
                        >
                            {t("close.trust")}{" "}
                        </span>
                        <span className={"size-90"}>{t("close.us")}</span>
                    </span>
                </TitleHx>
                <p>
                    {t("close.waiting")}{" "}
                    <span className={"span-pr-color"}>{t("close.portal")}</span>
                </p>
                <FigureImage
                    src={LOGO_IMAGE.image}
                    alt={LOGO_IMAGE.alt}
                    title={LOGO_IMAGE.alt}
                    width={LOGO_IMAGE.width}
                    height={LOGO_IMAGE.height}
                />
            </section>
        </AnimatedInView>
    );
}

export default CloseHomeSection;
