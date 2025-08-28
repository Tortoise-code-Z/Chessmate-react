import styles from "./UserCourses.module.css";
import UserDefaultCourses from "./UserDefaultCourses";
import LightComponent from "../../LightComponent";
import TitleHx from "../../TitleHx";
import UserObtainedCourses from "./UserObtainedCourses";

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
    return (
        <div className={styles.userCourses}>
            <LightComponent top={50} right={30} />
            {showDefaultCourses && (
                <div className={styles.userDefaultCoursesContainer}>
                    <TitleHx level={3}>Gratuitos</TitleHx>
                    <UserDefaultCourses />
                </div>
            )}

            {showObtainedCourses && (
                <div className={styles.userObtainedCoursesContainer}>
                    <TitleHx level={3}>Adquiridos</TitleHx>
                    <UserObtainedCourses
                        obtainedCoursesLimit={obtainedCoursesLimit}
                        msg={msg}
                    />
                </div>
            )}
        </div>
    );
}

export default UserCourses;
