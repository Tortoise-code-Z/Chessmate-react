import styles from "./UserDefaultCourseItem.module.css";
import { Link } from "react-router-dom";
import UserProgress from "../UserProgress";
import { DefualtCourse, Progress } from "../../../../../types/types";
import { PATHS } from "../../../../../consts/paths";
import TitleHx from "../../../../TitleHx";
import FigureImage from "../../../../FigureImage";
import { getImage, getImageSize } from "../../../../../utils/images";
import { DEFAULT_DEFAULT_COURSE_IMAGE } from "../../../../../consts/images";
import { asString } from "../../../../../utils/general";
import { PIECE_TITLE_DEFAULT_MSG } from "../../../../../consts/general";

type Props = {
    data: DefualtCourse & Progress;
};

/**
 * UserDefaultCourseItem - React component that displays an individual default/free course for a user.
 *
 * Features:
 * - Wraps the course in a `Link` to navigate to the specific class page.
 * - Shows course progress via `UserProgress`.
 * - Displays the course image using `FigureImage` with a fallback default image.
 * - Shows the course title with a `TitleHx` component.
 * - Safely handles missing or undefined data using utility functions and default constants.
 *
 * Props:
 * - `data`: Object containing course information and user's progress (`DefualtCourse & Progress`).
 *
 * @returns JSX.Element: A clickable course card showing the user's progress, image, and title.
 */

function UserDefaultCourseItem({ data }: Props) {
    return (
        <>
            <Link
                to={`/${PATHS.class.replace(":id", data.courseID.toString())}`}
                className={styles.userDefaultCourseItem}
            >
                <UserProgress data={data} />
                <FigureImage
                    otherImage={DEFAULT_DEFAULT_COURSE_IMAGE}
                    src={getImage(data?.imageUrl?.general, ["defaultCourses"])}
                    alt={asString(data?.title) || PIECE_TITLE_DEFAULT_MSG}
                    title={asString(data?.title) || PIECE_TITLE_DEFAULT_MSG}
                    width={getImageSize(data?.imageUrl?.general, "height")}
                    height={getImageSize(data?.imageUrl?.general, "height")}
                />
                <TitleHx classNames={[styles.title]} level={4}>
                    {asString(data?.title) || PIECE_TITLE_DEFAULT_MSG}
                </TitleHx>
            </Link>
        </>
    );
}

export default UserDefaultCourseItem;
