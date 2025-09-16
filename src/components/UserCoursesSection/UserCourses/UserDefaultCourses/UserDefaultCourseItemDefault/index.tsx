import styles from "./UserDefaultCourseItemDefault.module.css";
import UserProgress from "../UserProgress";
import { DefualtCourse, Progress } from "../../../../../types/types";
import TitleHx from "../../../../TitleHx";
import FigureImage from "../../../../FigureImage";
import { getImage, getImageSize } from "../../../../../utils/images";
import { DEFAULT_DEFAULT_COURSE_IMAGE } from "../../../../../consts/images";
import { asString } from "../../../../../utils/general";

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

function UserDefaultCourseItemDefault({ data }: Props) {
    return (
        <>
            <div className={styles.userDefaultCourseItem}>
                <UserProgress data={data} />
                <FigureImage
                    otherImage={DEFAULT_DEFAULT_COURSE_IMAGE}
                    src={getImage(data?.imageUrl?.general, ["defaultCourses"])}
                    alt={asString(data?.title) || "Pieza"}
                    title={asString(data?.title) || "Pieza"}
                    width={getImageSize(data?.imageUrl?.general, "height")}
                    height={getImageSize(data?.imageUrl?.general, "height")}
                />
                <div className={styles.desactivate}>Desactivado</div>
                <TitleHx classNames={[styles.title]} level={4}>
                    {asString(data?.title) || "Pieza"}
                </TitleHx>
            </div>
        </>
    );
}

export default UserDefaultCourseItemDefault;
