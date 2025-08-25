import UserObtainedCourses from "..";
import { CourseJSON, Progress } from "../../../../types/types";
import TitleHx from "../../../TitleHx";

type Props = {
    data?: (CourseJSON & Progress)[] | undefined;
};

function UserCoursesWithoutEmptyState({ data }: Props) {
    return (
        <>
            {data && data.length > 0 && (
                <>
                    <TitleHx level={3}>Adquiridos</TitleHx>
                    <UserObtainedCourses data={data} />
                </>
            )}
        </>
    );
}

export default UserCoursesWithoutEmptyState;
