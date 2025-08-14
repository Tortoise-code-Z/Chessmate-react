import UserObtainedCourses from "..";
import { CourseJSON, Progress } from "../../../../types/types";

type Props = {
    data?: (CourseJSON & Progress)[] | undefined;
    obtainedCourseClassID?: number;
};

function UserCoursesWithoutEmptyState({ data, obtainedCourseClassID }: Props) {
    return (
        <>
            {data && data.length > 0 && (
                <>
                    <h3>Adquiridos</h3>
                    <UserObtainedCourses
                        data={data}
                        classID={obtainedCourseClassID}
                    />
                </>
            )}
        </>
    );
}

export default UserCoursesWithoutEmptyState;
