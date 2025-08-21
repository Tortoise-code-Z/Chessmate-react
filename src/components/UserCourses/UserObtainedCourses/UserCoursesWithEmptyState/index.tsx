import UserObtainedCourses from "..";
import { CourseJSON, Progress } from "../../../../types/types";
import ThereArentCourses from "../ThereArentCourses";

type Props = {
    data?: (CourseJSON & Progress)[];
    obtainedCourseClassID?: number;
    msg?: string;
};

function UserCoursesWithEmptyState({
    data,
    obtainedCourseClassID,
    msg,
}: Props) {
    console.log(msg);
    return (
        <>
            <h3>Adquiridos</h3>
            {data && data.length > 0 ? (
                <UserObtainedCourses
                    data={data}
                    classID={obtainedCourseClassID}
                />
            ) : (
                <ThereArentCourses msg={msg} />
            )}
        </>
    );
}

export default UserCoursesWithEmptyState;
