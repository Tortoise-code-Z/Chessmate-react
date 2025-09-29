import { Dispatch, SetStateAction } from "react";
import AutoSliderImages from "./AutoSliderImages";
import styles from "./Board.module.css";
import { UseCourseApiType } from "../../../../../types/types";
import { AnimatedInView } from "../../../../../components/AnimatedInView";

type Props = {
    data: UseCourseApiType | undefined;
    index: number;
    imageSliderLoading: boolean;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
};

/**
 * Board - React component that displays the course board with an auto-sliding image gallery for the selected theme.
 *
 * Features:
 * - Uses `AutoSliderImages` to show theme images with automatic sliding and loading state management.
 * - Retrieves the current theme's images and title based on the provided `index`.
 * - Wrapped with `AnimatedInView` for entry animations when the board comes into view.
 * - Manages image slider loading state to prevent flickering during transitions.
 * - Styled with CSS modules for proper layout and appearance.
 *
 * Props:
 * - `data`: Course data (`UseCourseApiType | undefined`) containing themes and images.
 * - `index`: Current theme index to display.
 * - `imageSliderLoading`: Boolean indicating if the image slider is currently loading.
 * - `setImageSliderLoading`: Function to update the image slider loading state.
 *
 * @returns JSX.Element: An animated course board showing the selected theme's images.
 */

function Board({
    data,
    imageSliderLoading,
    index,
    setImageSliderLoading,
}: Props) {
    return (
        <AnimatedInView config={{ direction: "left", duration: 0.3 }}>
            <div className={styles.boardZone}>
                <AutoSliderImages
                    images={
                        data?.courses?.content?.themes?.find(
                            (t) => t?.id === index
                        )?.images
                    }
                    time={1000}
                    themeTitle={
                        data?.courses?.content?.themes?.find(
                            (t) => t?.id === index
                        )?.title
                    }
                    loading={imageSliderLoading}
                    setLoading={setImageSliderLoading}
                />
            </div>
        </AnimatedInView>
    );
}

export default Board;
