import { useParams } from "react-router-dom";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useObtainedCourses from "../../hooks/useObtainedCourses";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import DataStateWrapper from "../DataStateWrapperProps";
import LightComponent from "../LightComponent";
import styles from "./UserCourses.module.css";
import UserDefaultCourses from "./UserDefaultCourses";
import UserCoursesWithEmptyState from "./UserObtainedCourses/UserCoursesWithEmptyState";
import UserCoursesWithoutEmptyState from "./UserObtainedCourses/UserCoursesWithoutEmptyState";
import TitleHx from "../TitleHx";

type Props = {
    obtainedCoursesLimit?: number;
    showObtainedCourses?: boolean;
    showDefaultCourses?: boolean;
    msg?: string;
};

function UserCourses({
    obtainedCoursesLimit,
    showObtainedCourses = true,
    showDefaultCourses = true,
    msg,
}: Props) {
    const { user } = useUserAuthStore();
    const params = useParams();

    const { data, isLoading, error } = useObtainedCourses(
        DATABASE_KEY,
        user?.userID as number,
        obtainedCoursesLimit as number,
        Number(params.id)
    );

    return (
        <div className={styles.userCourses}>
            <LightComponent top={50} right={30} />
            {showDefaultCourses && (
                <>
                    <div className={styles.userDefaultCoursesContainer}>
                        <TitleHx level={3}>Gratuitos</TitleHx>
                        <UserDefaultCourses />
                    </div>
                </>
            )}

            <div className={styles.userObtainedCoursesContainer}>
                <DataStateWrapper isLoading={isLoading} error={error}>
                    {showObtainedCourses ? (
                        <UserCoursesWithEmptyState data={data} msg={msg} />
                    ) : (
                        <UserCoursesWithoutEmptyState data={data} />
                    )}
                </DataStateWrapper>
            </div>
        </div>
    );
}

export default UserCourses;
