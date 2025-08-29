import styles from "./UserDefaultCourseItemDefault.module.css";

type Props = {};

function UserDefaultCourseItemDefault({}: Props) {
    return (
        <div className={styles.userDefaultCourseItemDefault}>
            <p className={styles.notData}>Curso no disponible</p>
        </div>
    );
}

export default UserDefaultCourseItemDefault;
