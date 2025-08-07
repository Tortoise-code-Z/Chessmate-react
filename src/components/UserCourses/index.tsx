import { NavLink } from "react-router-dom";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useObtainedCourses from "../../hooks/useObtainedCourses";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import DataStateWrapper from "../DataStateWrapperProps";
import LightComponent from "../LightComponent";
import styles from "./UserCourses.module.css";
import UserDefaultCourses from "./UserDefaultCourses";
import UserObtainedCourses from "./UserObtainedCourses";
import { paths } from "../../consts/paths";
import { FaBook } from "react-icons/fa6";

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
                <div className={[styles.msgNotCoursesYet].join(" ")}>
                    <p>No tienes cursos aún...</p>
                    <NavLink
                        className={["button", "buttonPrimary"].join(" ")}
                        to={`/${paths.courses}`}
                    >
                        <FaBook />
                        Ir a cursos
                    </NavLink>
                </div>
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
