import { CourseJSON, Progress } from "../../../types/types";
import styles from "./UserObtainedCourses.module.css";
import UserObtainedCoursesItem from "./UserObtainedCoursesItem";

type Props = {
    data: (CourseJSON & Progress)[];
    msg?: string;
};

function UserObtainedCourses({ data }: Props) {
    return (
        <div className={styles.userObtainedCourses}>
            {data.map((c) => (
                <UserObtainedCoursesItem key={c.curseID} data={c} />
            ))}
        </div>
    );
}

export default UserObtainedCourses;
