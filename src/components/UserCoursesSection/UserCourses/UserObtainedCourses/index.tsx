import { useParams } from "react-router-dom";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import styles from "./UserObtainedCourses.module.css";
import UserObtainedCoursesItem from "./UserObtainedCoursesItem";
import useObtainedCourses from "../../../../hooks/useObtainedCourses";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import ThereArentCourses from "./ThereArentCourses";
import DataStateWrapper from "../../../DataStateWrapperProps";

type Props = {
    obtainedCoursesLimit?: number;
    msg?: string;
};

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
                        {data.map((c) => (
                            <UserObtainedCoursesItem key={c.curseID} data={c} />
                        ))}
                    </div>
                ) : (
                    <ThereArentCourses msg={msg} />
                )}
            </DataStateWrapper>
        </>
    );
}

export default UserObtainedCourses;
