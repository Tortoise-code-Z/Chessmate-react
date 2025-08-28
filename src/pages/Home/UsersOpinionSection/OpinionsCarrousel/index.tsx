import DataStateWrapper from "../../../../components/DataStateWrapperProps";
import EmblaCarousel from "../../../../components/EmblaCarousel";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import useUsersOpinions from "../../../../hooks/useUsersOpinions";
import { Opinion } from "../../../../types/types";
import OpinionsSlide from "../OpinionsSlide";

type Props = {};

/**
 * OpinionsCarrousel component that displays student opinions in a carousel format.
 *
 * Features:
 * - `DataStateWrapper`: Handles loading and error states when fetching opinions.
 * - `EmblaCarousel`: Renders opinions as slides with looping, autoplay, and fit-height configuration.
 * - `OpinionsSlide`: Component used for each individual opinion slide.
 *
 * Hooks:
 * - `useUsersOpinions`: Fetches user opinions from the database.
 *
 * @returns JSX element rendering a carousel of student opinions with loading and error handling.
 */

function OpinionsCarrousel({}: Props) {
    const { data, isLoading, error } = useUsersOpinions(DATABASE_KEY);

    return (
        <DataStateWrapper
            isLoading={isLoading}
            error={error}
            errorMsg="No se ha podido recuperar las opiniones."
        >
            <EmblaCarousel
                slides={data ?? ([] as Opinion[])}
                options={{ loop: true }}
                Component={OpinionsSlide}
                arrows={false}
                playButton={false}
                playInit={true}
                fitHeight={true}
            />
        </DataStateWrapper>
    );
}

export default OpinionsCarrousel;
