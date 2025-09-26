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
 * ExplanationTheme component displaying detailed information and actions for the current course theme.
 *
 * - Renders `CourseData` to show the content of the selected theme.
 * - Renders `ThemeActions` to provide user interactions related to the theme.
 * - Manages theme index and image slider loading state via props.
 *
 * Props:
 *  - `data`: Course data of type `UseCourseApiType`.
 *  - `index`: Current theme index.
 *  - `setIndex`: Function to update the current theme index.
 *  - `setImageSliderLoading`: Function to update the image slider loading state.
 *
 * @returns JSX element representing the explanation section for a course theme.
 */

function ExplanationTheme({
    data,
    setIndex,
    index,
    setImageSliderLoading,
}: Props) {
    return (
        <AnimatedInView direction="right" duration={0.3}>
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
