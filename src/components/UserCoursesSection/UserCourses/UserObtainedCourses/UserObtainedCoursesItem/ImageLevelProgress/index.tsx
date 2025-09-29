import {
    LEVEL_DEFAULT_MSG,
    LEVELS,
    PROGRESS_DEFAULT_MSG,
} from "../../../../../../consts/general";
import { CourseJSON, Level, Progress } from "../../../../../../types/types";
import {
    asNumber,
    asString,
    isNumber,
    isOnValues,
} from "../../../../../../utils/general";
import { getImage, getImageSize } from "../../../../../../utils/images";
import FigureImage from "../../../../../FigureImage";
import styles from "./ImageLevelProgress.module.css";

type Props = {
    data: CourseJSON & Progress;
};

/**
 * ImageLevelProgress - React component that displays a course image along with its level and progress.
 *
 * Features:
 * - Renders the course image using `FigureImage` with proper `src`, `alt`, `title`, width, and height.
 * - Shows the course level, falling back to `LEVEL_DEFAULT_MSG` if invalid or missing.
 * - Displays the user's progress percentage, using `PROGRESS_DEFAULT_MSG` if progress is unavailable or invalid.
 * - Utilizes utility functions for safe data handling (`asString`, `asNumber`, `isNumber`, `isOnValues`) and image processing (`getImage`, `getImageSize`).
 * - Styled with CSS modules for consistent layout and spacing.
 *
 * Props:
 * - `data`: Object containing course information and user's progress (`CourseJSON & Progress`).
 *
 * @returns JSX.Element: A course image card with level and progress information.
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
                    {isOnValues<Level>(data?.level, LEVELS) ||
                        LEVEL_DEFAULT_MSG}
                </p>
                <p className={styles.progress}>
                    {isNumber(data?.progress) || asNumber(data?.progress) === 0
                        ? `Progress: ${data.progress}%`
                        : PROGRESS_DEFAULT_MSG}
                </p>
            </div>
        </div>
    );
}

export default ImageLevelProgress;
