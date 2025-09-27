import styles from "./UserObtainedCoursesItem.module.css";
import ImageLevelProgress from "./ImageLevelProgress";
import CourseTitleAndDetail from "./CourseTitleAndDetail";
import { Link } from "react-router-dom";
import { CourseJSON, Progress } from "../../../../../types/types";
import { PATHS } from "../../../../../consts/paths";

type Props = {
    data: CourseJSON & Progress;
};

/**
 * Component representing a single obtained course in the user's dashboard.
 *
 * - Displays the course with a progress indicator (via `ImageLevelProgress`) and title/details (via `CourseTitleAndDetail`).
 * - Wraps the content in a `Link` to the course's classroom page.
 *
 * @param data - The obtained course data including course details and progress.
 * @returns A clickable link element styled as a user obtained course item.
 */

function UserObtainedCoursesItem({ data }: Props) {
    return (
        <Link
            to={`/${PATHS.obtainedCourseClassroom.replace(
                ":id",
                data.courseID.toString()
            )}`}
            className={styles.userObtainedCoursesItem}
        >
            <ImageLevelProgress data={data} />
            <CourseTitleAndDetail data={data} />
        </Link>
    );
}

export default UserObtainedCoursesItem;
