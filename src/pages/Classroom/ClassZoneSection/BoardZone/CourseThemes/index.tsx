import { FaCheckCircle } from "react-icons/fa";
import Button from "../../../../../components/Button";
import styles from "./CourseThemes.module.css";
import {
    ThemeDefaultCourses,
    UseCourseApiType,
} from "../../../../../types/types";
import { Dispatch, SetStateAction } from "react";
import { DEFAULT_VALUES_DEFAULT_COURSES } from "../../../../../consts/general";
import SecurityRendering from "../../../../../components/SecurityRendering";

type Props = {
    data: UseCourseApiType;
    setIndex: Dispatch<SetStateAction<number>>;
    index: number;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
    classWarning: string | null;
    setClassWarning: Dispatch<SetStateAction<string | null>>;
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

function CourseThemes({
    data,
    index,
    setImageSliderLoading,
    setIndex,
    classWarning,
    setClassWarning,
}: Props) {
    return (
        <div className={styles.themes}>
            <SecurityRendering<ThemeDefaultCourses>
                data={data?.courses?.content?.themes}
                conditions={[true]}
                noCriticalConditions={[
                    !!data.courses.title,
                    !!data.courses.content.detailDescription,
                    ...data.courses.content.themes.map(
                        (t) =>
                            !!t.title &&
                            !!t.description &&
                            t.images.filter((i) => i).length >
                                t.images.length * 0.5
                    ),
                ]}
                state={{
                    setWarningState: setClassWarning,
                    warningState: classWarning,
                }}
                msg="No se han podido recuperar algunos datos del curso. Estamos trabajando para poder solucionarlo."
            >
                {(theme, _i, _canRender) => {
                    return (
                        <Button
                            classNames={["p-relative"]}
                            key={theme.id}
                            onClick={() => {
                                setImageSliderLoading(true);
                                setIndex(theme.id);
                            }}
                            variant={
                                index === theme.id ? "Primary" : "Secondary"
                            }
                        >
                            {data?.userThemeStates?.find(
                                (u) => u.themeID === theme.id
                            )?.completed && (
                                <FaCheckCircle
                                    className={styles.completedIcon}
                                />
                            )}

                            {theme?.title ||
                                DEFAULT_VALUES_DEFAULT_COURSES.title}
                        </Button>
                    );
                }}
            </SecurityRendering>
        </div>
    );
}

export default CourseThemes;
