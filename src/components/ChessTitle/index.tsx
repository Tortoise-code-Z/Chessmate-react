import { CHESSLEVEL_DEFAUL_MSG } from "../../consts/general";
import { ChessLevel } from "../../types/types";
import styles from "./ChessTitle.module.css";

type Props = {
    title: ChessLevel | null | undefined;
    size?: "Small" | "Default";
};

/**
 * Component to display a user's chess title.
 *
 * - Shows the chess title if it exists and is not `"Sin título"`.
 * - Falls back to a default message (`CHESSLEVEL_DEFAUL_MSG`) when title is missing.
 * - Supports two text size variants: `"Small"` and `"Default"`.
 * - Uses styles from `ChessTitle.module.css`.
 *
 * Props:
 * - `title` → User's chess title, can be `ChessLevel`, `null`, or `undefined`.
 * - `size` → Optional. Text size variant: `"Small"` or `"Default"` (default: `"Default"`).
 *
 * @returns A styled paragraph element displaying the chess title or nothing if invalid.
 */

function ChessTitle({ title, size = "Default" }: Props) {
    return (
        <>
            {title && title !== "Sin título" && (
                <p className={styles[`userTitle${size}`]}>
                    {title || CHESSLEVEL_DEFAUL_MSG}
                </p>
            )}
        </>
    );
}

export default ChessTitle;
