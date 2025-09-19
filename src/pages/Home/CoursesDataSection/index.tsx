import ItemCourseData from "./ItemCourseData";
import LightComponent from "../../../components/LightComponent";
import { coursesDataItem } from "../../../consts/home";
import styles from "./CoursesDataSection.module.css";
import TitleHx from "../../../components/TitleHx";
import { asNumber } from "../../../utils/general";

type Props = {};

/**
 * CoursesDataSection component that displays a selection of cards on the homepage.
 *
 * Features:
 * - Light decorative components positioned top-right.
 * - `TitleHx`: Section title encouraging users to become professionals with the courses.
 * - Maps through `coursesDataItem` to render `ItemCourseData` for each course.
 *
 * @returns JSX element rendering a section of featured course items with decorative styling.
 */

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
                    <ItemCourseData
                        index={index}
                        key={asNumber(c?.id) || index}
                        item={c}
                    />
                ))}
            </div>
        </section>
    );
}

export default CoursesDataSection;
