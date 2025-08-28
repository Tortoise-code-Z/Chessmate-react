import { FaCheckCircle } from "react-icons/fa";
import Button from "../../../../../components/Button";
import styles from "./CourseThemes.module.css";
import { UseCourseApiType } from "../../../../../types/types";
import { Dispatch, SetStateAction } from "react";

type Props = {
    data: UseCourseApiType;
    setIndex: Dispatch<SetStateAction<number>>;
    index: number;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
};

/**
 * CourseThemes component displaying buttons for each theme in a course.
 *
 * - Renders a button for every theme, highlighting the currently selected theme.
 * - Shows a checkmark icon if the user has completed the theme.
 * - Updates the current theme index and triggers image slider loading when a theme button is clicked.
 *
 * Props:
 *  - `data`: Course data of type `UseCourseApiType`.
 *  - `index`: Current theme index.
 *  - `setIndex`: Function to update the current theme index.
 *  - `setImageSliderLoading`: Function to update the image slider loading state.
 *
 * @returns JSX element containing the list of theme buttons.
 */

function CourseThemes({ data, index, setImageSliderLoading, setIndex }: Props) {
    return (
        <div className={styles.themes}>
            {data.courses.content.themes.map((theme) => (
                <Button
                    classNames={["p-relative"]}
                    key={theme.id}
                    onClick={() => {
                        setImageSliderLoading(true);
                        setIndex(theme.id);
                    }}
                    variant={index === theme.id ? "Primary" : "Secondary"}
                >
                    {data.userThemeStates.find((u) => u.themeID === theme.id)
                        ?.completed && (
                        <FaCheckCircle className={styles.completedIcon} />
                    )}

                    {theme.title}
                </Button>
            ))}
        </div>
    );
}

export default CourseThemes;
