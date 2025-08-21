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

type Props = {
    defaultCourseClassID?: number;
    obtainedCourseClassID?: number;
    obtainedCoursesLimit?: number;
    showObtainedCourses?: boolean;
    showDefaultCourses?: boolean;
    msg?: string;
};

function UserCourses({
    defaultCourseClassID,
    obtainedCourseClassID,
    obtainedCoursesLimit,
    showObtainedCourses = true,
    showDefaultCourses = true,
    msg,
}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

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
                        <h3>Gratuitos</h3>
                        <UserDefaultCourses classID={defaultCourseClassID} />
                    </div>
                </>
            )}

            <div className={styles.userObtainedCoursesContainer}>
                <DataStateWrapper isLoading={isLoading} error={error}>
                    {showObtainedCourses ? (
                        <UserCoursesWithEmptyState
                            data={data}
                            obtainedCourseClassID={obtainedCourseClassID}
                            msg={msg}
                        />
                    ) : (
                        <UserCoursesWithoutEmptyState
                            data={data}
                            obtainedCourseClassID={obtainedCourseClassID}
                        />
                    )}
                </DataStateWrapper>
            </div>
        </div>
    );
}

export default UserCourses;
