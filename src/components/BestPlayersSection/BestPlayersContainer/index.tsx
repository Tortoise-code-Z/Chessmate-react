import { BestChessPlayers } from "../../../types/types";
import Button from "../../Button";
import styles from "./BestPlayersContainer.module.css";

type Props = {
    data: BestChessPlayers;
};

function BestPlayersContainer({ data }: Props) {
    const className = [styles.bestPlayersContainer].join(" ");
    return (
        <div className={className}>
            <div>
                <div>
                    <p>{data.username}</p>
                    <p>{data.title}</p>
                </div>
                <p>{data.score}</p>
                <p>Rank: {data.rank}</p>
            </div>
            <Button>Ver perfil</Button>
        </div>
    );
}

export default BestPlayersContainer;
