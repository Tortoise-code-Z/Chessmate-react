import { PLAYERS_CHESS } from "../../consts/url";
import useBestPlayersApi from "../../hooks/useBestPlayersApi";
import { BestPlayerChessData } from "../../types/types";
import EmblaCarousel from "../EmblaCarousel";
import LightComponent from "../LightComponent";
import BestPlayersContainer from "./BestPlayersContainer";
import styles from "./BestPlayersSection.module.css";

type Props = {};

function BestPlayersSection({}: Props) {
    const { data, isLoading, error } = useBestPlayersApi(PLAYERS_CHESS);
    return (
        <article className={[styles.bestPlayersSection].join(" ")}>
            <LightComponent top={5} right={65} />

            <h2>
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    Rating players
                </span>
                Chess.com
            </h2>
            <div className={[styles.sliderContainer].join(" ")}>
                <EmblaCarousel
                    slides={data ?? ([] as BestPlayerChessData[])}
                    options={{ loop: true }}
                    Component={BestPlayersContainer}
                    playButton={false}
                    playInit={true}
                />
            </div>
        </article>
    );
}

export default BestPlayersSection;
