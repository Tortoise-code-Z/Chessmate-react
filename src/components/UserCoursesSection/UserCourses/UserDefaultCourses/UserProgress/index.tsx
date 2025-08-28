import { DefualtCourse, Progress } from "../../../../../types/types";
import styles from "./UserProgress.module.css";

type Props = {
    data: DefualtCourse & Progress;
};

/**
 * Displays the user's progress for a given course.
 *
 * - If `data.progress` is greater than 0, renders a progress badge.
 * - Applies different styles depending on whether the course is completed (100%) or still in progress.
 *
 * Props:
 * - `data` → The course data combined with the user's progress.
 *
 * @returns A progress indicator with the percentage, or nothing if progress is 0 or undefined.
 */

function UserProgress({ data }: Props) {
    return (
        <>
            {data.progress && data.progress > 0 ? (
                <div
                    className={[
                        styles.progress,
                        data.progress < 100
                            ? styles.bccInProgress
                            : styles.bccCompleted,
                    ].join(" ")}
                >
                    <span>{data.progress}%</span>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default UserProgress;
