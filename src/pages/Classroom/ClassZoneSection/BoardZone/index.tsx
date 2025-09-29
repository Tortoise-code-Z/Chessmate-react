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
 * BoardZone - React component that displays the main board and associated course themes.
 *
 * Features:
 * - Renders the `Board` component for displaying course content, managing image slider loading state.
 * - Renders `CourseThemes` to navigate through and display different course themes.
 * - Manages current theme index and class warnings via state passed from parent component.
 * - Provides a structured layout for interactive course content.
 * - Styled with CSS modules for consistent appearance.
 *
 * Props:
 * - `data`: Course data (`UseCourseApiType | undefined`) containing themes and content.
 * - `setIndex`: Function to update the current theme index.
 * - `index`: Current theme index.
 * - `imageSliderLoading`: Boolean indicating if the theme image slider is loading.
 * - `setImageSliderLoading`: Function to set the image slider loading state.
 * - `classWarning`: Current warning state for the class.
 * - `setClassWarning`: Function to update the class warning state.
 *
 * @returns JSX.Element: A container displaying the course board and themes with proper state management.
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
