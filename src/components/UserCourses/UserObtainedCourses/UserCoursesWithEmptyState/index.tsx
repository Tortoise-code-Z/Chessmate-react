import UserObtainedCourses from "..";
import { CourseJSON, Progress } from "../../../../types/types";
import TitleHx from "../../../TitleHx";
import ThereArentCourses from "../ThereArentCourses";

type Props = {
    data?: (CourseJSON & Progress)[];
    msg?: string;
};

function UserCoursesWithEmptyState({ data, msg }: Props) {
    return (
        <>
            <TitleHx level={3}>Adquiridos</TitleHx>

            {data && data.length > 0 ? (
                <UserObtainedCourses data={data} msg={msg} />
            ) : (
                <ThereArentCourses msg={msg} />
            )}
        </>
    );
}

export default UserCoursesWithEmptyState;
