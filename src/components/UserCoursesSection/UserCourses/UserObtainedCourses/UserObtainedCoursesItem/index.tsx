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
 * UserObtainedCoursesItem - React component that displays a single obtained course as a clickable item.
 *
 * Features:
 * - Wraps the course item in a `Link` to navigate to the course classroom page.
 * - Displays course progress and level using `ImageLevelProgress`.
 * - Shows course title and additional details with `CourseTitleAndDetail`.
 * - Styled with CSS modules for consistent layout and appearance.
 *
 * Props:
 * - `data`: Object containing course information and user's progress (`CourseJSON & Progress`).
 *
 * @returns JSX.Element: A clickable course card linking to the user's obtained course classroom.
 */

function UserObtainedCoursesItem({ data }: Props) {
    return (
        <Link
            to={PATHS.obtainedCourseClassroom.replace(
                ":id",
                data.courseID.toString()
            )}
            className={styles.userObtainedCoursesItem}
        >
            <ImageLevelProgress data={data} />
            <CourseTitleAndDetail data={data} />
        </Link>
    );
}

export default UserObtainedCoursesItem;
