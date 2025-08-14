import { FaExclamationTriangle } from "react-icons/fa";
import DataStateWrapper from "../../../DataStateWrapperProps";
import styles from "./UserProgress.module.css";

type Props = {
    isLoading: boolean;
    error: Error | null;
    userProgress?: number;
};

function UserProgress({ error, isLoading, userProgress }: Props) {
    const errorComponent = (
        <div className={[styles.errorElement].join(" ")}>
            <FaExclamationTriangle />{" "}
            <span>No hemos podido recuperar tu progreso.</span>
        </div>
    );

    return (
        <DataStateWrapper
            isLoading={isLoading}
            error={error}
            errorComponent={errorComponent}
        >
            {userProgress && (
                <div
                    className={[
                        styles.progress,
                        userProgress < 100
                            ? styles.bccInProgress
                            : styles.bccCompleted,
                    ].join(" ")}
                >
                    <span>{userProgress}%</span>
                </div>
            )}
        </DataStateWrapper>
    );
}

export default UserProgress;
