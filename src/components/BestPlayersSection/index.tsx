import { PLAYERS_CHESS } from "../../consts/url";
import useBestPlayersApi from "../../hooks/useBestPlayersApi";
import { BestPlayerChessData } from "../../types/types";
import { asArray } from "../../utils/general";
import { AnimatedInView } from "../AnimatedInView";
import DataStateWrapper from "../DataStateWrapperProps";
import EmblaCarousel from "../EmblaCarousel";
import LightComponent from "../LightComponent";
import TitleHx from "../TitleHx";
import BestPlayersContainer from "./BestPlayersContainer";
import styles from "./BestPlayersSection.module.css";

type Props = {};

/**
 * Section that displays the top Chess.com players.
 *
 * - Fetches player data using `useBestPlayersApi`.
 * - Manages loading and error states through `DataStateWrapper`.
 * - Renders players in a carousel (`EmblaCarousel`) via `BestPlayersContainer`.
 * - Adds visual accents like the title (`TitleHx`) and decorative light (`LightComponent`).
 *
 * Props:
 * - None.
 *
 * @returns A section containing a title, a player carousel, and proper loading/error handling.
 */

function BestPlayersSection({}: Props) {
    const { data, isLoading, error } = useBestPlayersApi(PLAYERS_CHESS);

    const safeData = asArray<BestPlayerChessData>(data);

    return (
        <AnimatedInView config={{ options: { threshold: 0.1 } }}>
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
        </AnimatedInView>
    );
}

export default BestPlayersSection;
