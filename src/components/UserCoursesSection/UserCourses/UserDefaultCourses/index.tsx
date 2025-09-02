import { useParams } from "react-router-dom";
import UserDefaultCourseItem from "./UserDefaultCourseItem";
import styles from "./UserDefaultCourses.module.css";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import useDefaultCourses from "../../../../hooks/useDefaultCourses";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import DataStateWrapper from "../../../DataStateWrapperProps";
import { DefualtCourse, Progress } from "../../../../types/types";
import SecurityRendering from "../../../SecurityRendering";

type Props = {
    setDefaultWarning: React.Dispatch<React.SetStateAction<boolean>>;
};

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

function UserDefaultCourses({ setDefaultWarning }: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

    const {
        data: defaultCourses,
        isLoading,
        error,
    } = useDefaultCourses(
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
                <SecurityRendering<DefualtCourse & Progress>
                    data={defaultCourses}
                    setWarningState={setDefaultWarning}
                    conditions={defaultCourses?.map(
                        (course) =>
                            !!course &&
                            !!course.curseID &&
                            !!course.content.themes &&
                            (!!course.title || !!course.imageUrl.general)
                    )}
                >
                    {(course, index, canRendered) => {
                        if (!canRendered) {
                            return null;
                        }

                        return (
                            <UserDefaultCourseItem
                                key={course?.curseID ?? index}
                                data={course}
                            />
                        );
                    }}
                </SecurityRendering>
            </DataStateWrapper>
        </div>
    );
}

export default UserDefaultCourses;
