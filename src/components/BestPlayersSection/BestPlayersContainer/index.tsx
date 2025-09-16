import { BestPlayerChessData, ChessLevel, Level } from "../../../types/types";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import styles from "./BestPlayersContainer.module.css";
import ChessTitle from "../../ChessTitle";
import { asNumber, asString, isOnVaulues } from "../../../utils/general";
import { CHESS_LEVEL } from "../../../consts/general";

type Props = {
    data: BestPlayerChessData;
};

/**
 * Visual container that displays information for a featured Chess.com player.
 *
 * - Renders username, chess title, score, and rank.
 * - Includes an external link to the official Chess.com profile.
 * - Uses `ChessTitle` to display the player's title based on their level.
 *
 * Props:
 * - `data` → Object containing player information (username, title, score, rank, url).
 *
 * @returns Card with player data and link to Chess.com profile.
 */

function BestPlayersContainer({ data }: Props) {
    return (
        <div className={styles.bestPlayersContainer}>
            <div>
                <div className={styles.userData}>
                    <p className={styles.username}>
                        {asString(data?.username) || "Usuario"}
                    </p>
                    <ChessTitle
                        title={isOnVaulues<ChessLevel>(
                            data?.title,
                            CHESS_LEVEL
                        )}
                    />
                </div>
                <p className={styles.userScore}>
                    {asNumber(data?.score) || "N/A"}
                </p>
                <p className={styles.userRank}>
                    Rank: {asNumber(data?.rank) || "N/A"}
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
