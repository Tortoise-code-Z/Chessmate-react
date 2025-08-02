import styles from "./ObtainedTag.module.css";
import { FaCheckCircle } from "react-icons/fa";

type Props = {};

function ObtainedTag({}: Props) {
    return (
        <div className={[styles.obtainedTag].join(" ")}>
            <FaCheckCircle />
            Obtenido
        </div>
    );
}

export default ObtainedTag;
