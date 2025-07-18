import styles from "./UserCourses.module.css";
import UserDefaultCourses from "./UserDefaultCourses";
import UserObtainedCourses from "./UserObtainedCourses";

type Props = {};

function UserCourses({}: Props) {
    return (
        <div className={[styles.userCourses].join(" ")}>
            <div>
                <h3>Gratuitos</h3>
                <UserDefaultCourses />
            </div>
            <div>
                <h3>Adquiridos</h3>
                <UserObtainedCourses />
            </div>
        </div>
    );
}

export default UserCourses;
