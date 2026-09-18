import { useTranslation } from "react-i18next";
import { AnimatedInView } from "../../../components/AnimatedInView";
import LightComponent from "../../../components/LightComponent";
import TitleHx from "../../../components/TitleHx";
import OpinionsCarrousel from "./OpinionsCarrousel";
import styles from "./UsersOpinionSection.module.css";

/**
 * UsersOpinionSection - Testimonios de alumnos en la Home.
 */
function UsersOpinionSection() {
    const { t } = useTranslation("home");
    return (
        <AnimatedInView>
            <section className={styles.usersOpinionSection}>
                <LightComponent top={25} right={35} />

                <TitleHx level={2}>
                    {t("opinions.title")}
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        {t("opinions.highlight")}
                    </span>
                </TitleHx>

                <OpinionsCarrousel />
            </section>
        </AnimatedInView>
    );
}

export default UsersOpinionSection;
