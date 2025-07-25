import { Course } from "../../types/types";
import ItemCourseDisplay from "./ItemCourseDisplay";
import styles from "./CoursesDisplay.module.css";

type Props = {
    action?: boolean;
    courses: Course[] | null;
    display?: "Row" | "Col";
};

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
