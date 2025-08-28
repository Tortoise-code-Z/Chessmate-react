import { DefualtCourse, Progress } from "../../../../../types/types";
import styles from "./UserProgress.module.css";

type Props = {
    data: DefualtCourse & Progress;
};

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
