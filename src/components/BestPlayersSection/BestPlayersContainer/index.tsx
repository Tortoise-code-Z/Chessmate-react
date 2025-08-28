import { BestPlayerChessData, ChessLevel } from "../../../types/types";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import styles from "./BestPlayersContainer.module.css";
import ChessTitle from "../../ChessTitle";

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
                    <p className={styles.username}>{data.username}</p>
                    <ChessTitle title={data.title as ChessLevel} />
                </div>
                <p className={styles.userScore}>{data.score}</p>
                <p className={styles.userRank}>Rank: {data.rank}</p>
            </div>
            <a
                href={data.url}
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
