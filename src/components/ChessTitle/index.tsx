import { CHESSLEVEL_DEFAUL_MSG } from "../../consts/general";
import { ChessLevel } from "../../types/types";
import styles from "./ChessTitle.module.css";

type Props = {
    title: ChessLevel | null | undefined;
    size?: "Small" | "Default";
};

/**
 * ChessTitle component to display a player's chess title.
 *
 * - Renders the title if it exists.
 * - Supports different sizes via the `size` prop.
 *
 * Props:
 * - `title` → Chess title of the player (`ChessLevel` or `null`).
 * - `size` → Optional size of the text: `"Small"` or `"Default"` (default: `"Default"`).
 *
 * @returns A styled paragraph element with the player's chess title, or null if no title is provided.
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
