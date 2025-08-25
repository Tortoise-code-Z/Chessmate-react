import ItemCourseData from "./ItemCourseData";
import LightComponent from "../../../components/LightComponent";
import { coursesDataItem } from "../../../consts/home";
import styles from "./CoursesDataSection.module.css";
import TitleHx from "../../../components/TitleHx";

type Props = {};

function CoursesDataSection({}: Props) {
    return (
        <section className={styles.coursesDataSection}>
            <LightComponent top={15} right={30} />
            <LightComponent top={60} right={70} />
            <TitleHx level={2}>
                <span>
                    Conviértete en todo un{" "}
                    <span className={["span-pr-color upperCase"].join(" ")}>
                        profesional
                    </span>{" "}
                    con
                </span>{" "}
                nuestros cursos
            </TitleHx>
            <div className={styles.itemsContainer}>
                {coursesDataItem.map((c, index) => (
                    <ItemCourseData index={index} key={c.id} item={c} />
                ))}
            </div>
        </section>
    );
}

export default CoursesDataSection;
