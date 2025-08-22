import { ClipLoader } from "react-spinners";
import styles from "./LoadingElement.module.css";

type Props = {
    height?: "fit" | "all";
};

function LoadingElement({ height = "all" }: Props) {
    return (
        <div
            className={[
                styles.loading,
                height === "all"
                    ? styles.loadingElement
                    : styles.loadingElementFit,
            ].join(" ")}
        >
            <ClipLoader color="white" />
        </div>
    );
}

export default LoadingElement;
