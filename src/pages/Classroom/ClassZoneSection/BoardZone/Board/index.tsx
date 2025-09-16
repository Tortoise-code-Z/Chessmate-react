import { Dispatch, SetStateAction } from "react";
import AutoSliderImages from "./AutoSliderImages";
import styles from "./Board.module.css";
import { UseCourseApiType } from "../../../../../types/types";

type Props = {
    data: UseCourseApiType | undefined;
    index: number;
    imageSliderLoading: boolean;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
};

/**
 * Board component displaying images for the current course theme with an automatic slider.
 *
 * - Uses `AutoSliderImages` to show theme-related images with automatic transitions.
 * - Updates loading state for images to avoid flickering when changing themes.
 * - Retrieves the current theme's images and title based on the `index` prop.
 *
 * Props:
 *  - `data`: Course data of type `UseCourseApiType`.
 *  - `index`: Current theme index to display.
 *  - `imageSliderLoading`: Boolean indicating if the image slider is loading.
 *  - `setImageSliderLoading`: Function to update the image slider loading state.
 *
 * @returns JSX element representing the board with theme images.
 */

function Board({
    data,
    imageSliderLoading,
    index,
    setImageSliderLoading,
}: Props) {
    return (
        <div className={styles.boardZone}>
            <AutoSliderImages
                images={
                    data?.courses?.content?.themes?.find((t) => t?.id === index)
                        ?.images
                }
                time={1000}
                themeTitle={
                    data?.courses?.content?.themes?.find((t) => t?.id === index)
                        ?.title
                }
                loading={imageSliderLoading}
                setLoading={setImageSliderLoading}
            />
        </div>
    );
}

export default Board;
