import { BestChessPlayers } from "../../types/types";
import EmblaCarousel from "../EmblaCarousel";
import BestPlayersContainer from "./BestPlayersContainer";

type Props = {};

const playersData: BestChessPlayers[] = [];

function BestPlayersSection({}: Props) {
    return (
        <article>
            <h2>
                <span>
                    <span>Rating</span>players
                </span>
                <span>Chess.com</span>
            </h2>
            <EmblaCarousel
                slides={playersData}
                options={{ loop: true }}
                Component={BestPlayersContainer}
            />
        </article>
    );
}

export default BestPlayersSection;
