import styles from "./MsgEmpty.module.css";
import { ReactNode } from "react";
import { FaInfoCircle } from "react-icons/fa";

type Props = {
    msg?: string;
    svg?: ReactNode;
    direction?: "Row" | "Col";
    position?: "Center" | "Start";
};

/**
 * Component to display a placeholder message when no data is available.
 *
 * - Shows an optional SVG or a default `FaInfoCircle` icon.
 * - Displays a message text, defaulting to "No hay datos para mostrar."
 * - Supports layout direction (`Row` or `Col`) and position alignment (`Center` or `Start`).
 * - Uses styles from `MsgEmpty.module.css`.
 *
 * Props:
 * - `msg` → Optional. Message text to display (default: `"No hay datos para mostrar."`).
 * - `svg` → Optional. Custom React node to display as an icon.
 * - `direction` → Optional. Layout direction of icon and text: `"Row"` or `"Col"` (default: `"Row"`).
 * - `position` → Optional. Alignment of content: `"Center"` or `"Start"` (default: `"Start"`).
 *
 * @returns A styled empty state message element with optional icon.
 */

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
