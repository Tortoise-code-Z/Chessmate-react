import LightComponent from "../LightComponent";
import styles from "./UserCourses.module.css";
import UserDefaultCourses from "./UserDefaultCourses";
import UserObtainedCourses from "./UserObtainedCourses";

type Props = {};

function UserCourses({}: Props) {
    return (
        <div className={[styles.userCourses].join(" ")}>
            <LightComponent top={50} right={30} />

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
