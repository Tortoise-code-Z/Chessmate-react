import TitleHx from "../../../../components/TitleHx";
import { DEFAULT_COURSES_VALUES } from "../../../../consts/general";
import { Course, TitleLevel } from "../../../../types/types";
import styles from "./CourseDescription.module.css";

type Props = {
    data: Course;
    level?: TitleLevel;
};

/**
 * CourseDescription component that displays the detailed description of a course.
 *
 * Features:
 * - `TitleHx`: Displays the section title "Descripción" with a customizable heading level.
 * - Paragraph showing the course's detailed description.
 *
 * Props:
 * - `data` (Course): The course object containing the detailed description.
 * - `level` (TitleLevel, optional): Heading level for the section title.
 *
 * @returns JSX element rendering the course description section.
 */

function CourseDescription({ data, level }: Props) {
    return (
        <div className={[styles.descriptionSection].join(" ")}>
            <TitleHx level={level}>Descripción</TitleHx>
            <p>
                {data?.detailDescription ||
                    DEFAULT_COURSES_VALUES.detailDescription}
            </p>
        </div>
    );
}

export default CourseDescription;
