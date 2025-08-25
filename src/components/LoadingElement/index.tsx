import { ClipLoader } from "react-spinners";
import styles from "./LoadingElement.module.css";

type Props = {
    height?: "fit" | "all";
    classNames?: string[];
};

function LoadingElement({ height = "all", classNames = [] }: Props) {
    return (
        <div
            className={[
                styles.loading,
                height === "all"
                    ? styles.loadingElement
                    : styles.loadingElementFit,
                ...classNames,
            ].join(" ")}
        >
            <ClipLoader color="white" />
        </div>
    );
}

export default LoadingElement;
