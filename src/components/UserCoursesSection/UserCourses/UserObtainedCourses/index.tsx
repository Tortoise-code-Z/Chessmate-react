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
import {
    CourseJSON,
    Level,
    Progress,
    WarningMsgType,
} from "../../../../types/types";
import {
    asArray,
    asNumber,
    isNumber,
    isOnValues,
    isString,
} from "../../../../utils/general";
import { LEVELS } from "../../../../consts/general";

type Props = {
    obtainedCoursesLimit?: number;
    msg?: string;
    setCourseWarning: Dispatch<SetStateAction<WarningMsgType | null>>;
    courseWarning: WarningMsgType | null;
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
        asNumber(user?.userID),
        asNumber(obtainedCoursesLimit),
        asNumber(Number(params.id))
    );

    let safeData = asArray<CourseJSON & Progress>(data);

    return (
        <div className={styles.userObtainedCourses}>
            <DataStateWrapper isLoading={isLoading} error={error}>
                <SecurityRendering<CourseJSON & Progress>
                    data={safeData}
                    state={{
                        setWarningState: setCourseWarning,
                        warningState: courseWarning,
                    }}
                    conditions={safeData?.map((d) => isNumber(d?.curseID))}
                    noCriticalConditions={safeData?.map(
                        (d) =>
                            isString(d?.title) &&
                            isNumber(d?.progress) &&
                            !!isOnValues<Level>(d?.level, LEVELS) &&
                            isString(d?.imageUrl?.thumb)
                    )}
                    emptyNode={<ThereArentCourses msg={msg} />}
                >
                    {(course, index, canRendered) => {
                        if (!canRendered) {
                            return (
                                <UserObtainedItemDefault
                                    key={asNumber(course?.curseID) || index}
                                    data={course}
                                />
                            );
                        }

                        return (
                            <UserObtainedCoursesItem
                                key={asNumber(course?.curseID) || index}
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
