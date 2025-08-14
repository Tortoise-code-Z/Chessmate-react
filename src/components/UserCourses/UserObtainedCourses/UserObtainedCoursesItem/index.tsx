import { CourseJSON, Progress } from "../../../../types/types";
import styles from "./UserObtainedCoursesItem.module.css";
import ImageLevelProgress from "./ImageLevelProgress";
import CourseTitleAndDetail from "./CourseTitleAndDetail";

type Props = {
    data: CourseJSON & Progress;
};

function UserObtainedCoursesItem({ data }: Props) {
    return (
        <div className={styles.userObtainedCoursesItem}>
            <ImageLevelProgress data={data} />
            <CourseTitleAndDetail data={data} />
        </div>
    );
}

export default UserObtainedCoursesItem;
