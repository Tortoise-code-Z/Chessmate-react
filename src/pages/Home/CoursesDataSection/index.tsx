import ItemCourseData from "./ItemCourseData";
import LightComponent from "../../../components/LightComponent";
import { coursesDataItem } from "../../../consts/home";
import styles from "./CoursesDataSection.module.css";
import TitleHx from "../../../components/TitleHx";
import { asNumber } from "../../../utils/general";
import { AnimatedInView } from "../../../components/AnimatedInView";

type Props = {};

/**
 * CoursesDataSection - React component that displays a section of featured course items
 * on the homepage to encourage users to explore and enroll.
 *
 * Features:
 * - Wraps content in `AnimatedInView` for animated entrance effects.
 * - Includes decorative `LightComponent` elements for visual enhancement.
 * - Displays a section title using `TitleHx` with highlighted text spans.
 * - Iterates over `coursesDataItem` to render individual `ItemCourseData` components.
 * - Safely generates keys using `asNumber` utility with a fallback to the index.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A homepage section showing featured courses with animation and styling.
 */

function CoursesDataSection({}: Props) {
    return (
        <AnimatedInView>
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
        </AnimatedInView>
    );
}

export default CoursesDataSection;
