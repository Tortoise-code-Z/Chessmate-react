import { useTranslation } from "react-i18next";
import { AnimatedInView } from "../../../components/AnimatedInView";
import TitleHx from "../../../components/TitleHx";
import styles from "./Hero.module.css";

/**
 * Hero - Sección principal de la Home con título de marca y subtítulo.
 */
function Hero() {
    const { t } = useTranslation("home");
    return (
        <div className={styles.hero}>
            <AnimatedInView>
                <div className={styles.titleContainer}>
                    <TitleHx>
                        Chess<span className="span-pr-color">mate</span>
                    </TitleHx>
                    <p className={styles.subtitle}>{t("hero.subtitle")}</p>
                </div>
            </AnimatedInView>
        </div>
    );
}

export default Hero;
