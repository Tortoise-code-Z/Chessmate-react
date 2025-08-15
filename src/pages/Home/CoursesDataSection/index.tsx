import ItemCourseData from "./ItemCourseData";
import LightComponent from "../../../components/LightComponent";
import { coursesDataItem } from "../../../consts/home";
import styles from "./CoursesDataSection.module.css";

type Props = {};

function CoursesDataSection({}: Props) {
    return (
        <section className={styles.coursesDataSection}>
            <LightComponent top={15} right={30} />
            <LightComponent top={60} right={70} />
            <h2>
                <span>
                    Conviértete en todo un{" "}
                    <span className={["span-pr-color upperCase"].join(" ")}>
                        profesional
                    </span>{" "}
                    con
                </span>{" "}
                nuestros cursos
            </h2>
            <div className={styles.itemsContainer}>
                {coursesDataItem.map((c, index) => (
                    <ItemCourseData index={index} key={c.id} item={c} />
                ))}
            </div>
        </section>
    );
}

export default CoursesDataSection;
