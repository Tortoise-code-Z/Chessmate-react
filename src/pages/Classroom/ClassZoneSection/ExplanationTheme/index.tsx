import { Dispatch, SetStateAction } from "react";
import styles from "./ExplanationTheme.module.css";
import { UseCourseApiType } from "../../../../types/types";
import CourseData from "./CourseData";
import ThemeActions from "./ThemeActions";

type Props = {
    setIndex: Dispatch<React.SetStateAction<number>>;
    index: number;
    data: UseCourseApiType;
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
        <div className={styles.explanationTheme}>
            <CourseData index={index} data={data} />
            <ThemeActions
                data={data}
                index={index}
                setImageSliderLoading={setImageSliderLoading}
                setIndex={setIndex}
            />
        </div>
    );
}

export default ExplanationTheme;
