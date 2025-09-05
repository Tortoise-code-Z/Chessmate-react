import { useParams } from "react-router-dom";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import styles from "./UserObtainedCourses.module.css";
import UserObtainedCoursesItem from "./UserObtainedCoursesItem";
import useObtainedCourses from "../../../../hooks/useObtainedCourses";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import ThereArentCourses from "./ThereArentCourses";
import DataStateWrapper from "../../../DataStateWrapperProps";
import UserObtainedItemDefault from "./UserObtainedItemDefault";
import { Dispatch, SetStateAction } from "react";
import SecurityRendering from "../../../SecurityRendering";
import { CourseJSON, Progress } from "../../../../types/types";

type Props = {
    obtainedCoursesLimit?: number;
    msg?: string;
    setCourseWarning: Dispatch<SetStateAction<string | null>>;
    courseWarning: string | null;
};

/**
 * Displays the list of courses the user has already obtained.
 *
 * - Fetches obtained courses using `useObtainedCourses`.
 * - Shows a loading or error state via `DataStateWrapper`.
 * - If the user has obtained courses, renders a `UserObtainedCoursesItem` for each.
 * - If there are no obtained courses, shows a `ThereArentCourses` message.
 *
 * Props:
 * - `obtainedCoursesLimit` → Optional limit on how many obtained courses to display.
 * - `msg` → Optional message to show if there are no obtained courses.
 *
 * @returns The rendered obtained courses section.
 */

function UserObtainedCourses({
    obtainedCoursesLimit,
    msg,
    setCourseWarning,
    courseWarning,
}: Props) {
    const { user } = useUserAuthStore();
    const params = useParams();

    const { data, isLoading, error } = useObtainedCourses(
        DATABASE_KEY,
        user?.userID as number,
        obtainedCoursesLimit,
        Number(params.id)
    );

    return (
        <div className={styles.userObtainedCourses}>
            <DataStateWrapper isLoading={isLoading} error={error}>
                <SecurityRendering<CourseJSON & Progress>
                    data={data}
                    state={{
                        setWarningState: setCourseWarning,
                        warningState: courseWarning,
                    }}
                    conditions={data?.map((d) => !!d.curseID)}
                    noCriticalConditions={data?.map(
                        (d) =>
                            !!d?.title &&
                            (!!d?.progress || d?.progress === 0) &&
                            !!d?.level &&
                            !!d?.imageUrl?.thumb
                    )}
                    emptyNode={<ThereArentCourses msg={msg} />}
                >
                    {(course, index, canRendered) => {
                        if (!canRendered) {
                            return (
                                <UserObtainedItemDefault
                                    key={course.curseID || index}
                                    data={course}
                                />
                            );
                        }

                        return (
                            <UserObtainedCoursesItem
                                key={course.curseID || index}
                                data={course}
                            />
                        );
                    }}
                </SecurityRendering>
            </DataStateWrapper>
        </div>
    );
}

export default UserObtainedCourses;
