import styles from "./UserDefaultCourseItem.module.css";
import { Link } from "react-router-dom";
import UserProgress from "../UserProgress";
import { DefualtCourse, Progress } from "../../../../../types/types";
import { PATHS } from "../../../../../consts/paths";
import TitleHx from "../../../../TitleHx";
import FigureImage from "../../../../FigureImage";
import { getImage, getImageSize } from "../../../../../utils/images";
import { DEFAULT_COURSE_IMAGE } from "../../../../../consts/images";

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
                to={`/${PATHS.class.replace(":id", data.curseID.toString())}`}
                className={styles.userDefaultCourseItem}
            >
                <UserProgress data={data} />
                <FigureImage
                    src={
                        data?.imageUrl?.general
                            ? getImage(data.imageUrl.general, [
                                  "defaultCourses",
                              ])
                            : DEFAULT_COURSE_IMAGE.image
                    }
                    alt={data?.title ?? "Pieza"}
                    title={data?.title ?? "Pieza"}
                    width={
                        data?.imageUrl?.general
                            ? getImageSize(data.imageUrl.general, "height")
                            : DEFAULT_COURSE_IMAGE.width
                    }
                    height={
                        data?.imageUrl?.general
                            ? getImageSize(data?.imageUrl?.general, "height")
                            : DEFAULT_COURSE_IMAGE.height
                    }
                />
                <TitleHx classNames={[styles.title]} level={4}>
                    {data?.title ?? "Pieza"}
                </TitleHx>
            </Link>
        </>
    );
}

export default UserDefaultCourseItem;
