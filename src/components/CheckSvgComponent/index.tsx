import { FaCheckCircle } from "react-icons/fa";
import styles from "./CheckSvgComponent.module.css";

type Props = {
    top?: number;
    right?: number;
    type?: "pixel" | "percent";
    size?: "small" | "medium";
};

/**
 * Checkmark icon component for indicating completion status.
 *
 * - Renders a `FaCheckCircle` positioned using `top` and `right` values.
 * - Supports positioning in pixels or percentages.
 * - Provides two size options: `"small"` or `"medium"`.
 * - Applies styles from `CheckSvgComponent.module.css`.
 *
 * Props:
 * - `top` → Optional. Vertical offset from the top (default: `0`).
 * - `right` → Optional. Horizontal offset from the right (default: `0`).
 * - `type` → Optional. Unit type for positioning: `"pixel"` or `"percent"` (default: `"pixel"`).
 * - `size` → Optional. Icon size: `"small"` or `"medium"` (default: `"small"`).
 *
 * @returns A positioned and styled checkmark SVG icon.
 */

function CheckSvgComponent({
    right = 0,
    top = 0,
    type = "pixel",
    size = "small",
}: Props) {
    return (
        <FaCheckCircle
            style={{
                top: `${top}${type === "pixel" ? "px" : "%"}`,
                right: `${right}${type === "pixel" ? "px" : "%"}`,
            }}
            className={[
                styles.completedIcon,
                size === "medium" ? styles.medium : "",
                size === "small" ? styles.small : "",
            ].join(" ")}
        />
    );
}

export default CheckSvgComponent;
