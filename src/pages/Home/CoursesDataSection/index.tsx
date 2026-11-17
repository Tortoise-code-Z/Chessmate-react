import { useTranslation } from "react-i18next";
import ItemCourseData from "./ItemCourseData";
import LightComponent from "../../../components/LightComponent";
import { coursesDataImages } from "../../../consts/home";
import styles from "./CoursesDataSection.module.css";
import TitleHx from "../../../components/TitleHx";
import { asNumber } from "../../../utils/general";
import { AnimatedInView } from "../../../components/AnimatedInView";

type CardText = { title: string; description: string };

/**
 * CoursesDataSection - Sección de cursos destacados de la Home.
 * Combina las imágenes (consts/home) con los textos traducibles (namespace home).
 */
function CoursesDataSection() {
    const { t } = useTranslation("home");
    const cards = t("cards", { returnObjects: true }) as unknown as CardText[];

    return (
        <AnimatedInView>
            <section className={styles.coursesDataSection}>
                <LightComponent top={15} right={30} />
                <LightComponent top={60} right={70} />

                <TitleHx level={2}>
                    <span>
                        {t("featured.part1")}{" "}
                        <span className={["span-pr-color upperCase"].join(" ")}>
                            {t("featured.highlight")}
                        </span>{" "}
                        {t("featured.part2")}
                    </span>{" "}
                    {t("featured.part3")}
                </TitleHx>
                <div className={styles.itemsContainer}>
                    {coursesDataImages.map((img, index) => (
                        <ItemCourseData
                            index={index}
                            key={asNumber(img?.id) || index}
                            item={{
                                id: img.id,
                                url: img.url,
                                title: cards[index]?.title ?? "",
                                description: cards[index]?.description ?? "",
                            }}
                        />
                    ))}
                </div>
            </section>
        </AnimatedInView>
    );
}

export default CoursesDataSection;
