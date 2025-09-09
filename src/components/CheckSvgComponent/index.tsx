import { FaCheckCircle } from "react-icons/fa";
import styles from "./CheckSvgComponent.module.css";

type Props = {
    top?: number;
    right?: number;
    type?: "pixel" | "percent";
    size?: "small" | "medium";
};

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
