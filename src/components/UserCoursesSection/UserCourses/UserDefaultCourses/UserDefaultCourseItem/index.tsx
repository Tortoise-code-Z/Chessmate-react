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
 * Component that renders an individual default course item for a user.
 *
 * - Wraps the course in a `Link` to navigate to the course's class page.
 * - Displays the user's progress with `UserProgress`.
 * - Shows the course image using `FigureImage`, with dynamic sizing.
 * - Displays the course title using `TitleHx`.
 *
 * Props:
 * - `data` → The default course data combined with the user's progress.
 *
 * @returns A linked course item displaying progress, image, and title.
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
