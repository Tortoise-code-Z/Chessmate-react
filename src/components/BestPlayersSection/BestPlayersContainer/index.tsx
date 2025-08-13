import { BestPlayerChessData, ChessLevel } from "../../../types/types";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import styles from "./BestPlayersContainer.module.css";
import ChessTitle from "../../ChessTitle";

type Props = {
    data: BestPlayerChessData;
};

function BestPlayersContainer({ data }: Props) {
    return (
        <div className={[styles.bestPlayersContainer].join(" ")}>
            <div>
                <div className={[styles.userData].join(" ")}>
                    <p className={[styles.username].join(" ")}>
                        {data.username}
                    </p>
                    <ChessTitle title={data.title as ChessLevel} />
                </div>
                <p className={[styles.userScore].join(" ")}>{data.score}</p>
                <p className={[styles.userRank].join(" ")}>Rank: {data.rank}</p>
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
