import { coursesDataItem } from "../../consts/home";
import ItemCourseData from "../ItemCourseData";
import styles from "./CoursesDataSection.module.css";

type Props = {};

function CoursesDataSection({}: Props) {
    return (
        <section className={[styles.coursesDataSection].join(" ")}>
            <h2>
                <span>
                    Conviértete en todo un{" "}
                    <span className={["span-pr-color upperCase"].join(" ")}>
                        profesional
                    </span>
                    con
                </span>{" "}
                nuestros cursos
            </h2>
            <div className={[styles.itemsContainer].join(" ")}>
                {coursesDataItem.map((c, index) => (
                    <ItemCourseData index={index} key={c.id} item={c} />
                ))}
            </div>
        </section>
    );
}

export default CoursesDataSection;
