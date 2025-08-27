import { CourseJSON, Progress } from "../../../../types/types";
import styles from "./UserObtainedCoursesItem.module.css";
import ImageLevelProgress from "./ImageLevelProgress";
import CourseTitleAndDetail from "./CourseTitleAndDetail";
import { Link } from "react-router-dom";
import { PATHS } from "../../../../consts/paths";

type Props = {
    data: CourseJSON & Progress;
};

function UserObtainedCoursesItem({ data }: Props) {
    return (
        <Link
            to={`/${PATHS.obtainedCourseClassroom.replace(
                ":id",
                data.curseID.toString()
            )}`}
            className={styles.userObtainedCoursesItem}
        >
            <ImageLevelProgress data={data} />
            <CourseTitleAndDetail data={data} />
        </Link>
    );
}

export default UserObtainedCoursesItem;
