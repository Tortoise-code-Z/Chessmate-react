import UserObtainedCourses from "..";
import { CourseJSON, Progress } from "../../../../types/types";
import ThereArentCourses from "../ThereArentCourses";

type Props = {
    data?: (CourseJSON & Progress)[];
    obtainedCourseClassID?: number;
};

function UserCoursesWithEmptyState({ data, obtainedCourseClassID }: Props) {
    return (
        <>
            <h3>Adquiridos</h3>
            {data && data.length > 0 ? (
                <UserObtainedCourses
                    data={data}
                    classID={obtainedCourseClassID}
                />
            ) : (
                <ThereArentCourses />
            )}
        </>
    );
}

export default UserCoursesWithEmptyState;
