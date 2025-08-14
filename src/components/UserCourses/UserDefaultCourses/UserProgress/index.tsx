import styles from "./UserProgress.module.css";
import { DefualtCourse, Progress } from "../../../../types/types";

type Props = {
    data: DefualtCourse & Progress;
};

function UserProgress({ data }: Props) {
    return (
        <>
            {data.progress ? (
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
