import { useParams } from "react-router-dom";
import UserDefaultCourseItem from "./UserDefaultCourseItem";
import styles from "./UserDefaultCourses.module.css";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import useDefaultCourses from "../../../../hooks/useDefaultCourses";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import DataStateWrapper from "../../../DataStateWrapperProps";

type Props = {};

/**
 * Component that displays the default (free) courses for a user.
 *
 * - Uses `useParams` to retrieve route parameters, such as the current course ID.
 * - Retrieves the authenticated user via `useUserAuthStore`.
 * - Fetches default courses for the user with `useDefaultCourses`.
 * - Wraps the course list in `DataStateWrapper` to handle loading and error states.
 * - Renders each course with `UserDefaultCourseItem`.
 *
 * Props:
 * - None.
 *
 * @returns A container div displaying the user's default courses with loading and error handling.
 */

function UserDefaultCourses({}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();
    const { data, isLoading, error } = useDefaultCourses(
        DATABASE_KEY,
        user?.userID as number,
        Number(params.id)
    );

    return (
        <div className={[styles.userDefaultCourses].join(" ")}>
            <DataStateWrapper
                isLoading={isLoading}
                error={error}
                errorMsg="No hemos podido recuperar los cursos."
            >
                {data?.map((d) => {
                    return <UserDefaultCourseItem key={d.curseID} data={d} />;
                })}
            </DataStateWrapper>
        </div>
    );
}

export default UserDefaultCourses;
