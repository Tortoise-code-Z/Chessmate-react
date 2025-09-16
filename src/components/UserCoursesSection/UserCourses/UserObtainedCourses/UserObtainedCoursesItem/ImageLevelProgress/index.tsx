import {
    DEFAULT_COURSES_VALUES,
    LEVELS,
} from "../../../../../../consts/general";
import { CourseJSON, Progress } from "../../../../../../types/types";
import {
    asNumber,
    asString,
    isNumber,
    isOnVaulues,
    isString,
} from "../../../../../../utils/general";
import { getImage, getImageSize } from "../../../../../../utils/images";
import FigureImage from "../../../../../FigureImage";
import styles from "./ImageLevelProgress.module.css";

type Props = {
    data: CourseJSON & Progress;
};

/**
 * Component displaying a course's thumbnail image, level, and progress.
 *
 * - Uses `FigureImage` to show the course's thumbnail.
 * - Displays the course's level and completion percentage.
 *
 * @param data - The course data including title, image URL, level, and progress.
 * @returns A styled container showing the course image and progress information.
 */

function ImageLevelProgress({ data }: Props) {
    return (
        <div className={styles.container}>
            <FigureImage
                src={getImage(data?.imageUrl?.thumb, ["courses"])}
                alt={asString(data?.title)}
                title={asString(data?.title)}
                width={getImageSize(data?.imageUrl?.thumb, "width")}
                height={getImageSize(data?.imageUrl?.thumb, "height")}
            />

            <div className={styles.data}>
                <p className={styles.level}>
                    {isOnVaulues(data?.level, LEVELS as any) ||
                        DEFAULT_COURSES_VALUES.level}
                </p>
                <p className={styles.progress}>
                    {asNumber(data?.progress) || asNumber(data?.progress) === 0
                        ? `Progress: ${data?.progress}%`
                        : DEFAULT_COURSES_VALUES.progress}
                </p>
            </div>
        </div>
    );
}

export default ImageLevelProgress;
