import { useParams } from "react-router-dom";
import UserDefaultCourseItem from "./UserDefaultCourseItem";
import styles from "./UserDefaultCourses.module.css";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import useDefaultCourses from "../../../../hooks/useDefaultCourses";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import DataStateWrapper from "../../../DataStateWrapperProps";
import {
    DefualtCourse,
    Progress,
    WarningMsgType,
} from "../../../../types/types";
import SecurityRendering from "../../../SecurityRendering";
import { Dispatch, SetStateAction } from "react";
import UserDefaultCourseItemDefault from "./UserDefaultCourseItemDefault";
import MsgEmpty from "../../../MsgEmpty";
import {
    asArray,
    asNumber,
    isNumber,
    isString,
} from "../../../../utils/general";

type Props = {
    setDefaultWarning: Dispatch<SetStateAction<WarningMsgType | null>>;
    defaultWarning: WarningMsgType | null;
};

/**
 * UserDefaultCourses - React component that displays a list of default/free courses for a user.
 *
 * Features:
 * - Fetches default courses for the current user and the specific course category from `useDefaultCourses`.
 * - Displays loading and error states via `DataStateWrapper`.
 * - Uses `SecurityRendering` to ensure data integrity and handle incomplete or missing course data.
 * - Shows a warning message if some course data cannot be fully retrieved.
 * - Renders each course using `UserDefaultCourseItem` if valid, or `UserDefaultCourseItemDefault` if critical data is missing.
 * - Displays a `MsgEmpty` component if no courses are available.
 *
 * Props:
 * - `setDefaultWarning`: Function to update the warning state.
 * - `defaultWarning`: Current warning state.
 *
 * @returns JSX.Element: A container displaying the user's default courses with proper error handling and warnings.
 */

function UserDefaultCourses({ setDefaultWarning, defaultWarning }: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useDefaultCourses(
        DATABASE_KEY,
        asNumber(user?.userID),
        asNumber(Number(params.id))
    );

    let safeData = asArray<DefualtCourse & Progress>(data);

    return (
        <div className={[styles.userDefaultCourses].join(" ")}>
            <DataStateWrapper
                isLoading={isLoading}
                error={error}
                errorMsg="No hemos podido recuperar los cursos."
            >
                <SecurityRendering<DefualtCourse & Progress>
                    data={safeData}
                    state={{
                        setWarningState: setDefaultWarning,
                        warningState: defaultWarning,
                    }}
                    conditions={safeData?.map((course) =>
                        isNumber(course?.courseID)
                    )}
                    noCriticalConditions={safeData?.map(
                        (course) =>
                            (isString(course?.title) ||
                                isString(course?.imageUrl?.general)) &&
                            isNumber(course?.progress)
                    )}
                    emptyNode={<MsgEmpty msg="No hay cursos para mostrar." />}
                >
                    {(course, index, canRendered) => {
                        if (!canRendered) {
                            return (
                                <UserDefaultCourseItemDefault
                                    key={asNumber(course?.courseID) || index}
                                    data={course}
                                />
                            );
                        }

                        return (
                            <UserDefaultCourseItem
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

export default UserDefaultCourses;
