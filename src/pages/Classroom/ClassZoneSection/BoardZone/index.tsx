import { Dispatch, SetStateAction } from "react";
import styles from "./BoardZone.module.css";
import { UseCourseApiType, WarningMsgType } from "../../../../types/types";
import Board from "./Board";
import CourseThemes from "./CourseThemes";

type Props = {
    data: UseCourseApiType | undefined;
    setIndex: Dispatch<SetStateAction<number>>;
    index: number;
    imageSliderLoading: boolean;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
    classWarning: WarningMsgType | null;
    setClassWarning: Dispatch<SetStateAction<WarningMsgType | null>>;
};

/**
 * BoardZone component that organizes the main course content and theme navigation.
 *
 * - Renders the `Board` component to display the current theme's content.
 * - Renders the `CourseThemes` component for theme navigation and selection.
 * - Manages theme index and image slider loading state via props.
 *
 * Props:
 *  - `data`: Course data of type `UseCourseApiType`.
 *  - `setIndex`: Function to update the current theme index.
 *  - `index`: Current theme index.
 *  - `imageSliderLoading`: Boolean indicating if the image slider is loading.
 *  - `setImageSliderLoading`: Function to update the image slider loading state.
 *
 * @returns JSX element representing the board zone for course content.
 */

function BoardZone({
    setIndex,
    index,
    data,
    imageSliderLoading,
    setImageSliderLoading,
    classWarning,
    setClassWarning,
}: Props) {
    return (
        <div className={styles.boardContainer}>
            <Board
                data={data}
                index={index}
                imageSliderLoading={imageSliderLoading}
                setImageSliderLoading={setImageSliderLoading}
            />

            <CourseThemes
                classWarning={classWarning}
                setClassWarning={setClassWarning}
                data={data}
                setIndex={setIndex}
                index={index}
                setImageSliderLoading={setImageSliderLoading}
            />
        </div>
    );
}

export default BoardZone;
