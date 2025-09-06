import { useParams } from "react-router-dom";
import UserDefaultCourseItem from "./UserDefaultCourseItem";
import styles from "./UserDefaultCourses.module.css";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import useDefaultCourses from "../../../../hooks/useDefaultCourses";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import DataStateWrapper from "../../../DataStateWrapperProps";
import { DefualtCourse, Progress } from "../../../../types/types";
import SecurityRendering from "../../../SecurityRendering";
import { Dispatch, SetStateAction } from "react";
import UserDefaultCourseItemDefault from "./UserDefaultCourseItemDefault";
import MsgEmpty from "../../../MsgEmpty";

type Props = {
    setDefaultWarning: Dispatch<SetStateAction<string | null>>;
    defaultWarning: string | null;
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

function UserDefaultCourses({ setDefaultWarning, defaultWarning }: Props) {
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
                <SecurityRendering<DefualtCourse & Progress>
                    data={data}
                    state={{
                        setWarningState: setDefaultWarning,
                        warningState: defaultWarning,
                    }}
                    conditions={data?.map(
                        (course) => !!course && !!course.curseID
                    )}
                    noCriticalConditions={data?.map(
                        (course) =>
                            !!course.content.themes &&
                            (!!course.title || !!course.imageUrl.general)
                    )}
                    emptyNode={<MsgEmpty msg="No hay cursos para mostrar." />}
                >
                    {(course, index, canRendered) => {
                        if (!canRendered) {
                            return (
                                <UserDefaultCourseItemDefault
                                    key={course?.curseID ?? index}
                                    data={course}
                                />
                            );
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
