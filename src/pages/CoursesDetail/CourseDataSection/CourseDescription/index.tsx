import { AnimatedInView } from "../../../../components/AnimatedInView";
import TitleHx from "../../../../components/TitleHx";
import { DESCRIPTION_DEFAULT_MSG } from "../../../../consts/general";
import { Course, TitleLevel } from "../../../../types/types";
import { asString } from "../../../../utils/general";
import styles from "./CourseDescription.module.css";

type Props = {
    data: Course | undefined;
    level?: TitleLevel;
};

/**
 * CourseDescription - React component that displays the detailed description of a course.
 *
 * Features:
 * - Wraps content in `AnimatedInView` to animate visibility on scroll.
 * - Uses `TitleHx` to render a heading with configurable level (`h1`–`h6`).
 * - Shows the course's detailed description or falls back to `DESCRIPTION_DEFAULT_MSG` if not available.
 * - Safely handles undefined values with the `asString` utility.
 *
 * Props:
 * - `data`: Course object containing course information (may be undefined).
 * - `level`: Optional heading level for the section title (`TitleLevel`).
 *
 * @returns JSX.Element: A section with a title and course description text.
 */

function CourseDescription({ data, level }: Props) {
    return (
        <AnimatedInView>
            <div className={[styles.descriptionSection].join(" ")}>
                <TitleHx level={level}>Descripción</TitleHx>
                <p>
                    {asString(data?.detailDescription) ||
                        DESCRIPTION_DEFAULT_MSG}
                </p>
            </div>
        </AnimatedInView>
    );
}

export default CourseDescription;
