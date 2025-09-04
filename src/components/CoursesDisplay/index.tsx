import { CourseJSON, IsObtainedCourse } from "../../types/types";
import ItemCourseDisplay from "./ItemCourseDisplay";
import styles from "./CoursesDisplay.module.css";
import SecurityRendering from "../SecurityRendering";

type Props = {
    action?: boolean;
    courses: (CourseJSON & IsObtainedCourse)[];
    display?: "Row" | "Col";
};

/**
 * CoursesDisplay - Component to render a list of courses.
 *
 * Displays each course using the ItemCourseDisplay component.
 * Can render in column or row layout.
 *
 * @param courses - Array of courses to display. Each course may include an `isObtained` flag.
 * @param action - Optional boolean to indicate if actions (like buttons) should be shown for each course.
 * @param display - Optional layout type: "Row" or "Col". Defaults to "Col".
 */

function CoursesDisplay({ courses, action, display = "Col" }: Props) {
    const className = [
        display === "Col"
            ? styles.coursesColumnDisplay
            : styles.coursesRowDisplay,
    ].join(" ");
    return (
        <div className={className}>
            <SecurityRendering<CourseJSON & IsObtainedCourse>
                data={courses}
                conditions={courses?.map((c) => !!c.curseID && !!c.title)}
            >
                {(courses, index, canRender) => {
                    if (!canRender) return null;
                    return (
                        <ItemCourseDisplay
                            courseID={courses.curseID}
                            key={courses.curseID || index}
                            action={action}
                            data={courses}
                            display={display}
                        />
                    );
                }}
            </SecurityRendering>
        </div>
    );
}

export default CoursesDisplay;
