import { useParams } from "react-router-dom";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import styles from "./UserObtainedCourses.module.css";
import UserObtainedCoursesItem from "./UserObtainedCoursesItem";
import useObtainedCourses from "../../../../hooks/useObtainedCourses";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import ThereArentCourses from "./ThereArentCourses";
import DataStateWrapper from "../../../DataStateWrapperProps";
import UserObtainedItemDefault from "./UserObtainedItemDefault";

type Props = {
    obtainedCoursesLimit?: number;
    msg?: string;
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

function UserObtainedCourses({ obtainedCoursesLimit, msg }: Props) {
    const { user } = useUserAuthStore();
    const params = useParams();

    const { data, isLoading, error } = useObtainedCourses(
        DATABASE_KEY,
        user?.userID as number,
        obtainedCoursesLimit,
        Number(params.id)
    );

    return (
        <>
            <DataStateWrapper isLoading={isLoading} error={error}>
                {data && data.length > 0 ? (
                    <div className={styles.userObtainedCourses}>
                        {data.map((c) =>
                            c?.curseID ? (
                                <UserObtainedCoursesItem
                                    key={c.curseID}
                                    data={c}
                                />
                            ) : (
                                <UserObtainedItemDefault />
                            )
                        )}
                    </div>
                ) : (
                    <ThereArentCourses msg={msg} />
                )}
            </DataStateWrapper>
        </>
    );
}

export default UserObtainedCourses;
