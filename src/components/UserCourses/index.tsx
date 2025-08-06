import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useObtainedCourses from "../../hooks/useObtainedCourses";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import DataStateWrapper from "../DataStateWrapperProps";
import LightComponent from "../LightComponent";
import styles from "./UserCourses.module.css";
import UserDefaultCourses from "./UserDefaultCourses";
import UserObtainedCourses from "./UserObtainedCourses";

type Props = {
    defaultCourseClassID?: number;
    obtainedCourseClassID?: number;
    obtainedCoursesLimit?: number;
    showObtainedCourses?: boolean;
};

function UserCourses({
    defaultCourseClassID,
    obtainedCourseClassID,
    obtainedCoursesLimit,
    showObtainedCourses = true,
}: Props) {
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useObtainedCourses(
        DATABASE_KEY,
        user?.userID as number,
        obtainedCoursesLimit as number
    );

    const showObtainedCoursesItem = (
        <>
            <h3>Adquiridos</h3>
            {data && data.length > 0 ? (
                <UserObtainedCourses
                    data={data}
                    classID={obtainedCourseClassID}
                />
            ) : (
                <p>No tienes cursos aún...</p>
            )}
        </>
    );

    const notShowObtainesCoursesItem = (
        <>
            {data && data.length > 0 && (
                <>
                    <h3>Adquiridos</h3>
                    <UserObtainedCourses
                        data={data}
                        classID={obtainedCourseClassID}
                    />
                </>
            )}
        </>
    );

    return (
        <div className={[styles.userCourses].join(" ")}>
            <LightComponent top={50} right={30} />

            <div>
                <h3>Gratuitos</h3>
                <UserDefaultCourses classID={defaultCourseClassID} />
            </div>
            <div>
                <DataStateWrapper isLoading={isLoading} error={error}>
                    {showObtainedCourses
                        ? showObtainedCoursesItem
                        : notShowObtainesCoursesItem}
                </DataStateWrapper>
            </div>
        </div>
    );
}

export default UserCourses;
