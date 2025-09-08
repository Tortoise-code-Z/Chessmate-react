import { ClipLoader } from "react-spinners";
import styles from "./LoadingElement.module.css";

type Props = {
    height?: "fit" | "all";
    classNames?: string[];
    paddingLoadingNavbar?: boolean;
};

/**
 * Renders a loading spinner element with optional height and additional class names.
 *
 * @param height - Determines the height behavior of the loading container. "all" fills the container, "fit" adjusts to content. Defaults to "all".
 * @param classNames - Optional array of additional class names for styling.
 *
 * @returns The rendered loading element with a spinner.
 */

function LoadingElement({
    height = "all",
    classNames = [],
    paddingLoadingNavbar = false,
}: Props) {
    return (
        <div
            className={[
                styles.loading,
                height === "all"
                    ? styles.loadingElement
                    : styles.loadingElementFit,
                paddingLoadingNavbar ? styles.loadingWidthNavPadd : "",
                ...classNames,
            ].join(" ")}
        >
            <ClipLoader color="white" />
        </div>
    );
}

export default LoadingElement;
