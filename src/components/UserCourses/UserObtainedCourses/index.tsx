import { CourseJSON, Progress } from "../../../types/types";
import styles from "./UserObtainedCourses.module.css";
import UserObtainedCoursesItem from "./UserObtainedCoursesItem";

type Props = {
    classID?: number;
    data: (CourseJSON & Progress)[];
};

function UserObtainedCourses({ classID, data }: Props) {
    return (
        <div className={[styles.userObtainedCourses].join(" ")}>
            {data.map(
                (d) =>
                    classID !== d.curseID && (
                        <UserObtainedCoursesItem key={d.curseID} data={d} />
                    )
            )}
        </div>
    );
}

export default UserObtainedCourses;
