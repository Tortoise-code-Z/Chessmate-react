import { BestPlayerChessData, ChessLevel } from "../../../types/types";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import styles from "./BestPlayersContainer.module.css";
import ChessTitle from "../../ChessTitle";
import { asNumber, asString, isOnValues } from "../../../utils/general";
import {
    CHESS_LEVEL,
    RANK_DEFAULT_MSG,
    SCORE_DEFAULT_MSG,
    USER_DEFAULT_MSG,
} from "../../../consts/general";

type Props = {
    data: BestPlayerChessData;
};

/**
 * Card component that displays details of a Chess.com player.
 *
 * - Shows player's username, chess title, score, and rank.
 * - Provides a link to the player's Chess.com profile.
 * - Uses `ChessTitle` to render the player's title if available.
 *
 * Props:
 * - `data` → Object containing the player's data: `username`, `title`, `score`, `rank`, and `url`.
 *
 * @returns A styled card displaying player info and an external link to their Chess.com profile.
 */

function BestPlayersContainer({ data }: Props) {
    return (
        <div className={styles.bestPlayersContainer}>
            <div>
                <div className={styles.userData}>
                    <p className={styles.username}>
                        {asString(data?.username) || USER_DEFAULT_MSG}
                    </p>
                    <ChessTitle
                        title={isOnValues<ChessLevel>(data?.title, CHESS_LEVEL)}
                    />
                </div>
                <p className={styles.userScore}>
                    {asNumber(data?.score) || SCORE_DEFAULT_MSG}
                </p>
                <p className={styles.userRank}>
                    Rank: {asNumber(data?.rank) || RANK_DEFAULT_MSG}
                </p>
            </div>
            <a
                href={asString(data?.url) || ""}
                className={["button buttonPrimary", styles.goChesscom].join(
                    " "
                )}
                target="_blank"
            >
                <FaArrowUpRightFromSquare />
                Ver perfil
            </a>
        </div>
    );
}

export default BestPlayersContainer;
