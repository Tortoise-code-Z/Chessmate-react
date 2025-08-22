import UserObtainedCourses from "..";
import { CourseJSON, Progress } from "../../../../types/types";
import ThereArentCourses from "../ThereArentCourses";

type Props = {
    data?: (CourseJSON & Progress)[];
    msg?: string;
};

function UserCoursesWithEmptyState({ data, msg }: Props) {
    console.log(msg);
    return (
        <>
            <h3>Adquiridos</h3>
            {data && data.length > 0 ? (
                <UserObtainedCourses data={data} msg={msg} />
            ) : (
                <ThereArentCourses msg={msg} />
            )}
        </>
    );
}

export default UserCoursesWithEmptyState;
