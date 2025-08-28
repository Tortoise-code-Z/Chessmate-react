import { CourseJSON, IsObtainedCourse } from "../../types/types";
import ItemCourseDisplay from "./ItemCourseDisplay";
import styles from "./CoursesDisplay.module.css";

type Props = {
    action?: boolean;
    courses: (CourseJSON & IsObtainedCourse)[] | null;
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
            {courses?.map((course) => (
                <ItemCourseDisplay
                    courseID={course.curseID}
                    key={course.curseID}
                    action={action}
                    data={course}
                    display={display}
                />
            ))}
        </div>
    );
}

export default CoursesDisplay;
