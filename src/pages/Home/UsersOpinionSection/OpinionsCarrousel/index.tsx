import DataStateWrapper from "../../../../components/DataStateWrapperProps";
import EmblaCarousel from "../../../../components/EmblaCarousel";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import useUsersOpinions from "../../../../hooks/useUsersOpinions";
import { Opinion } from "../../../../types/types";
import { asArray } from "../../../../utils/general";
import OpinionsSlide from "../OpinionsSlide";

type Props = {};

/**
 * OpinionsCarrousel - React component that displays a carousel of student opinions/testimonials.
 *
 * Features:
 * - Fetches user opinions from the database using `useUsersOpinions`.
 * - Wraps content in `DataStateWrapper` to handle loading, error states, and display a fallback message.
 * - Converts fetched data safely into an array with `asArray`.
 * - Renders the opinions using `EmblaCarousel` with looping enabled and custom slide component (`OpinionsSlide`).
 * - Configured without navigation arrows and with autoplay enabled (`playInit`).
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A carousel of student testimonials with proper loading and error handling.
 */

function OpinionsCarrousel({}: Props) {
    let { data, isLoading, error } = useUsersOpinions(DATABASE_KEY);
    const safeData = asArray<Opinion>(data);

    return (
        <DataStateWrapper
            isLoading={isLoading}
            error={error}
            errorMsg="No se ha podido recuperar las opiniones."
        >
            <EmblaCarousel
                slides={safeData}
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
