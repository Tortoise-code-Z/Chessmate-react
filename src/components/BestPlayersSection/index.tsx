import { PLAYERS_CHESS } from "../../consts/url";
import useBestPlayersApi from "../../hooks/useBestPlayersApi";
import { BestPlayerChessData } from "../../types/types";
import { asArray } from "../../utils/general";
import DataStateWrapper from "../DataStateWrapperProps";
import EmblaCarousel from "../EmblaCarousel";
import LightComponent from "../LightComponent";
import TitleHx from "../TitleHx";
import BestPlayersContainer from "./BestPlayersContainer";
import styles from "./BestPlayersSection.module.css";

type Props = {};

/**
 * Featured section that displays the ranking of Chess.com players.
 *
 * - Fetches player information from the API using `useBestPlayersApi`.
 * - Handles loading and error states with `DataStateWrapper`.
 * - Renders the list in a carousel using `EmblaCarousel` and `BestPlayersContainer`.
 * - Includes decorative elements such as title and light effect (`LightComponent`).
 *
 * @returns Section with title, player carousel, and loading/error state management.
 */

function BestPlayersSection({}: Props) {
    const { data, isLoading, error } = useBestPlayersApi(PLAYERS_CHESS);

    const safeData = asArray<BestPlayerChessData>(data);

    return (
        <article className={styles.bestPlayersSection}>
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
                errorMsg={"No se ha podido recuperar los datos"}
                paddingErrorLateral={true}
            >
                <div className={styles.sliderContainer}>
                    <EmblaCarousel
                        slides={safeData}
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
