import LightComponent from "../LightComponent";
import styles from "./UserCourses.module.css";
import UserDefaultCourses from "./UserDefaultCourses";
import UserObtainedCourses from "./UserObtainedCourses";

type Props = {
    defaultCourseClassID?: number;
    obtainedCourseClassID?: number;
    obtainedCoursesLimit?: number;
};

function UserCourses({
    defaultCourseClassID,
    obtainedCourseClassID,
    obtainedCoursesLimit,
}: Props) {
    return (
        <div className={[styles.userCourses].join(" ")}>
            <LightComponent top={50} right={30} />

            <div>
                <h3>Gratuitos</h3>
                <UserDefaultCourses classID={defaultCourseClassID} />
            </div>
            <div>
                <h3>Adquiridos</h3>
                <UserObtainedCourses
                    limit={obtainedCoursesLimit}
                    classID={obtainedCourseClassID}
                />
            </div>
        </div>
    );
}

export default UserCourses;
