import { BestChessPlayers } from "../../types/types";
import EmblaCarousel from "../EmblaCarousel";
import BestPlayersContainer from "./BestPlayersContainer";

type Props = {};

const playersData: BestChessPlayers[] = [];

function BestPlayersSection({}: Props) {
    return (
        <EmblaCarousel
            slides={playersData}
            options={{ loop: true }}
            Component={BestPlayersContainer}
        />
    );
}

export default BestPlayersSection;
