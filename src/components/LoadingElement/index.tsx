import { ClipLoader } from "react-spinners";
import styles from "./LoadingElement.module.css";

type Props = {
    height?: "fit" | "all";
    classNames?: string[];
    paddingLoadingNavbar?: boolean;
};

/**
 * Loading spinner component.
 *
 * - Displays a `ClipLoader` spinner from `react-spinners`.
 * - Can adjust height to fill the container or fit content.
 * - Supports additional CSS classes and optional padding for the navbar.
 * - Uses styles from `LoadingElement.module.css`.
 *
 * Props:
 * - `height` → Optional. Determines spinner container height: `"all"` (full height) or `"fit"` (content fit) (default: `"all"`).
 * - `classNames` → Optional. Array of extra CSS class names to apply to the container.
 * - `paddingLoadingNavbar` → Optional. Adds padding to account for the navbar (default: `false`).
 *
 * @returns A styled loading spinner element.
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
