import LoadingElement from "../LoadingElement";
import styles from "./LoadingPage.module.css";
import { useEffect } from "react";

type Props = {
    msg: string;
};

/**
 * Full-page loading component with a message.
 *
 * - Disables page scrolling while the loading page is visible.
 * - Displays a message and a `LoadingElement` spinner.
 * - Uses styles from `LoadingPage.module.css`.
 *
 * Props:
 * - `msg` → The message text to display above the loading spinner.
 *
 * @returns A full-page loading overlay with a message and spinner.
 */

function LoadingPage({ msg }: Props) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className={styles.loadingPage}>
            <p className={styles.msg}>{msg}</p>
            <LoadingElement height="fit" />
        </div>
    );
}

export default LoadingPage;
