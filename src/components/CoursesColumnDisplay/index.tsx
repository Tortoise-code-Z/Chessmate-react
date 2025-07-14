import { Course } from "../../types/types";
import ItemCourseColumnDisplay from "../ItemCourseColumnDisplay";
import styles from "./CoursesColumnDisplay.module.css";

type Props = {
    action?: boolean;
    courses: Course[] | null;
};

function CoursesColumnDisplay({ courses, action }: Props) {
    const className = [styles.coursesColumnDisplay].join(" ");
    return (
        <div className={className}>
            {courses?.map((course) => (
                <ItemCourseColumnDisplay
                    key={course.curseID}
                    action={action}
                    data={course}
                />
            ))}
        </div>
    );
}

export default CoursesColumnDisplay;
