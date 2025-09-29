import styles from "./ObtainedTag.module.css";
import { FaCheckCircle } from "react-icons/fa";

type Props = {};

/**
 * Component to display a tag indicating that a course or item has been obtained.
 *
 * - Shows a checkmark icon (`FaCheckCircle`) alongside the text "Obtenido".
 * - Uses styles from `ObtainedTag.module.css` for consistent styling.
 *
 * Props:
 * - None.
 *
 * @returns A styled tag element indicating acquisition.
 */

function ObtainedTag({}: Props) {
    return (
        <div className={styles.obtainedTag}>
            <FaCheckCircle />
            Obtenido
        </div>
    );
}

export default ObtainedTag;
