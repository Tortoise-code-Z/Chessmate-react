import { ClipLoader } from "react-spinners";
import styles from "./LoadingElement.module.css";

type Props = {};

function LoadingElement({}: Props) {
    return (
        <div className={[styles.loadingElement].join(" ")}>
            <ClipLoader color="white" />
        </div>
    );
}

export default LoadingElement;
