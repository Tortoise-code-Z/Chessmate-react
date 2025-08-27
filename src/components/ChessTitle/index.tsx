import { ChessLevel } from "../../types/types";
import styles from "./ChessTitle.module.css";

type Props = {
    title: ChessLevel | null;
    size?: "Small" | "Default";
};

function ChessTitle({ title, size = "Default" }: Props) {
    return (
        <>{title && <p className={styles[`userTitle${size}`]}>{title}</p>}</>
    );
}

export default ChessTitle;
