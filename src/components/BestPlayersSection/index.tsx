import { PLAYERS_CHESS } from "../../consts/url";
import useBestPlayersApi from "../../hooks/useBestPlayersApi";
import { BestPlayerChessData } from "../../types/types";
import DataStateWrapper from "../DataStateWrapperProps";
import EmblaCarousel from "../EmblaCarousel";
import LightComponent from "../LightComponent";
import TitleHx from "../TitleHx";
import BestPlayersContainer from "./BestPlayersContainer";
import styles from "./BestPlayersSection.module.css";

type Props = {};

function BestPlayersSection({}: Props) {
    const { data, isLoading, error } = useBestPlayersApi(PLAYERS_CHESS);

    return (
        <article className={[styles.bestPlayersSection].join(" ")}>
            <LightComponent top={5} right={65} />

            <TitleHx level={2}>
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    Rating players
                </span>
                Chess.com
            </TitleHx>

            <DataStateWrapper
                isLoading={isLoading}
                error={error}
                errorMsg={"No se ha podido recuperar los cursos"}
            >
                <div className={[styles.sliderContainer].join(" ")}>
                    <EmblaCarousel
                        slides={data ?? ([] as BestPlayerChessData[])}
                        options={{ loop: true }}
                        Component={BestPlayersContainer}
                        playButton={false}
                        playInit={true}
                    />
                </div>
            </DataStateWrapper>
        </article>
    );
}

export default BestPlayersSection;
