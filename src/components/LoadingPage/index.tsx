import LoadingElement from "../LoadingElement";
import styles from "./LoadingPage.module.css";
import { useEffect } from "react";

type Props = {
    msg: string;
};

/**
 * Renders a full-page loading screen with a message and a spinner,
 * and disables page scrolling while visible.
 *
 * @param msg - The message to display above the loading spinner.
 *
 * @returns The rendered loading page component.
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
