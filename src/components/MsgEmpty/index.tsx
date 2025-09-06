import styles from "./MsgEmpty.module.css";
import { ReactNode } from "react";
import { FaInfoCircle } from "react-icons/fa";

type Props = {
    msg?: string;
    svg?: ReactNode;
    direction?: "Row" | "Col";
    position?: "Center" | "Start";
};

function MsgEmpty({
    msg = "No hay datos para mostrar.",
    svg,
    direction = "Row",
    position = "Start",
}: Props) {
    return (
        <div
            className={[
                styles.msgEmpty,
                styles[`msg${direction}`],
                styles[`msg${position}`],
            ].join(" ")}
        >
            {svg ? svg : <FaInfoCircle />}
            <p>{msg}</p>
        </div>
    );
}

export default MsgEmpty;
