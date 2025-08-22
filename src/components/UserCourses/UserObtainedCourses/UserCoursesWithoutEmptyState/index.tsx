import UserObtainedCourses from "..";
import { CourseJSON, Progress } from "../../../../types/types";

type Props = {
    data?: (CourseJSON & Progress)[] | undefined;
};

function UserCoursesWithoutEmptyState({ data }: Props) {
    return (
        <>
            {data && data.length > 0 && (
                <>
                    <h3>Adquiridos</h3>
                    <UserObtainedCourses data={data} />
                </>
            )}
        </>
    );
}

export default UserCoursesWithoutEmptyState;
