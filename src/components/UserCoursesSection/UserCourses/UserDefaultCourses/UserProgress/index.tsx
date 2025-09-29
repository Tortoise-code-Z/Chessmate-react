import { DefualtCourse, Progress } from "../../../../../types/types";
import { isNumber } from "../../../../../utils/general";
import styles from "./UserProgress.module.css";

type Props = {
    data: DefualtCourse & Progress;
};

/**
 * UserProgress - React component that displays a user's progress for a course.
 *
 * Features:
 * - Calculates and formats the progress percentage using `isNumber` utility.
 * - Applies different CSS classes based on progress state:
 *   - In progress (0 < progress < 100)
 *   - Completed (progress = 100)
 *   - No progress (progress not available)
 * - Safely handles undefined or non-numeric progress values.
 *
 * Props:
 * - `data`: Object containing course information and user's progress (`DefualtCourse & Progress`).
 *
 * @returns JSX.Element: A styled div showing the user's progress percentage.
 */

function UserProgress({ data }: Props) {
    const progress = (data: DefualtCourse & Progress) => {
        if (isNumber(data?.progress)) {
            if (data.progress > 0) return `${data.progress}%`;
            return "";
        }
        return `${data.progress}%`;
    };

    return (
        <div
            className={[
                styles.progress,
                isNumber(data?.progress) &&
                data.progress < 100 &&
                data.progress > 0
                    ? styles.bccInProgress
                    : !data.progress
                    ? ""
                    : styles.bccCompleted,
            ].join(" ")}
        >
            <span>{progress(data)}</span>
        </div>
    );
}

export default UserProgress;
