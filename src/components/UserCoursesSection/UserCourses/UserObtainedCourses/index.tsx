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
 * UserObtainedCourses - React component that displays a list of courses a user has obtained.
 *
 * Features:
 * - Fetches user's obtained courses using `useObtainedCourses` and user ID from `useUserAuthStore`.
 * - Handles loading and error states with `DataStateWrapper`.
 * - Uses `SecurityRendering` to safely render courses only when critical data conditions are met.
 * - Displays either `UserObtainedCoursesItem` for valid courses or `UserObtainedItemDefault` for incomplete/invalid data.
 * - Shows a fallback message via `ThereArentCourses` when no courses are obtained.
 * - Safely validates course data using utility functions (`isNumber`, `isString`, `isOnValues`) and constants (`LEVELS`).
 *
 * Props:
 * - `obtainedCoursesLimit` (optional): Maximum number of courses to fetch.
 * - `msg` (optional): Message to display when no courses are obtained.
 * - `setCourseWarning`: Function to set course-related warning messages.
 * - `courseWarning`: Current course warning state.
 *
 * @returns JSX.Element: A component rendering the user's obtained courses list with proper state handling.
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

    const safeData = asArray<CourseJSON & Progress>(data);

    return (
        <div className={styles.userObtainedCourses}>
            <DataStateWrapper isLoading={isLoading} error={error}>
                <SecurityRendering<CourseJSON & Progress>
                    data={safeData}
                    state={{
                        setWarningState: setCourseWarning,
                        warningState: courseWarning,
                    }}
                    conditions={safeData?.map((d) => isNumber(d?.courseID))}
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
                                    key={asNumber(course?.courseID) || index}
                                    data={course}
                                />
                            );
                        }

                        return (
                            <UserObtainedCoursesItem
                                key={asNumber(course?.courseID) || index}
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
