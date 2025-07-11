import { Course } from "../../types/types";
import ItemCourseColumnDisplay from "../ItemCourseColumnDisplay";

type Props = {
    action?: boolean;
    courses: Course[];
};

function CoursesColumnDisplay({ courses, action }: Props) {
    return (
        <div>
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
