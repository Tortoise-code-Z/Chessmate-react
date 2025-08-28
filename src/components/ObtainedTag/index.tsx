import styles from "./ObtainedTag.module.css";
import { FaCheckCircle } from "react-icons/fa";

type Props = {};

/**
 * Renders a tag indicating that an item has been obtained,
 * including a check-circle icon.
 *
 * @returns The rendered obtained tag element.
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
