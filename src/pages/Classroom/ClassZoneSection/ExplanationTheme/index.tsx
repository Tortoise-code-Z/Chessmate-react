import { Dispatch, SetStateAction } from "react";
import styles from "./ExplanationTheme.module.css";
import { UseCourseApiType } from "../../../../types/types";
import CourseData from "./CourseData";
import ThemeActions from "./ThemeActions";
import { AnimatedInView } from "../../../../components/AnimatedInView";

type Props = {
    setIndex: Dispatch<React.SetStateAction<number>>;
    index: number;
    data: UseCourseApiType | undefined;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
};

/**
 * ExplanationTheme - React component that displays detailed information and actions for the selected course theme.
 *
 * Features:
 * - Renders `CourseData` to show the current theme's details.
 * - Includes `ThemeActions` for interacting with the theme, such as navigation and updates.
 * - Animated entry with `AnimatedInView` for smooth appearance on screen.
 * - Manages current theme index and image slider loading state via props.
 * - Styled with CSS modules for consistent layout and spacing.
 *
 * Props:
 * - `data`: Course data (`UseCourseApiType | undefined`) containing themes and content.
 * - `setIndex`: Function to update the currently selected theme index.
 * - `index`: Current theme index.
 * - `setImageSliderLoading`: Function to set the image slider loading state.
 *
 * @returns JSX.Element: A detailed view of the selected theme with actionable controls.
 */

function ExplanationTheme({
    data,
    setIndex,
    index,
    setImageSliderLoading,
}: Props) {
    return (
        <AnimatedInView config={{ direction: "right", duration: 0.3 }}>
            <div className={styles.explanationTheme}>
                <CourseData index={index} data={data} />
                <ThemeActions
                    data={data}
                    index={index}
                    setImageSliderLoading={setImageSliderLoading}
                    setIndex={setIndex}
                />
            </div>
        </AnimatedInView>
    );
}

export default ExplanationTheme;
