import Button from "../../../../../components/Button";
import styles from "./CourseThemes.module.css";
import {
    ThemeDefaultCourses,
    ThemesUserStates,
    UseCourseApiType,
} from "../../../../../types/types";
import { Dispatch, SetStateAction } from "react";
import { DEFAULT_VALUES_DEFAULT_COURSES } from "../../../../../consts/general";
import SecurityRendering from "../../../../../components/SecurityRendering";
import {
    asArray,
    asBoolean,
    asString,
    isArray,
    isBoolean,
} from "../../../../../utils/general";
import CheckSvgComponent from "../../../../../components/CheckSvgComponent";

type Props = {
    data: UseCourseApiType | undefined;
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
    const themesCondition = (data: UseCourseApiType | undefined) => {
        if (!isArray(data?.courses?.content?.themes)) return [false];
        return data.courses.content.themes.map(
            (t) =>
                !!asString(t?.title) &&
                !!asString(t?.description) &&
                !!asArray(t?.images) &&
                t?.images?.filter((i) => asString(i))?.length >
                    t?.images?.length * 0.5
        );
    };

    return (
        <div className={styles.themes}>
            <SecurityRendering<ThemeDefaultCourses>
                data={data?.courses?.content?.themes}
                conditions={[true]}
                noCriticalConditions={[
                    !!asString(data?.courses?.title),
                    !!asString(data?.courses?.content?.detailDescription),
                    ...themesCondition(data),
                    !!asArray<ThemesUserStates>(data?.userThemeStates)?.every(
                        (u) => isBoolean(u?.completed)
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
                            key={theme?.id}
                            onClick={() => {
                                setImageSliderLoading(true);
                                setIndex(theme?.id);
                            }}
                            variant={
                                index === theme?.id ? "Primary" : "Secondary"
                            }
                        >
                            {asBoolean(
                                asArray<ThemesUserStates>(
                                    data?.userThemeStates
                                )?.find((u) => u?.themeID === theme?.id)
                                    ?.completed
                            ) && <CheckSvgComponent top={-10} right={-10} />}

                            {asString(theme?.title) ||
                                DEFAULT_VALUES_DEFAULT_COURSES.title}
                        </Button>
                    );
                }}
            </SecurityRendering>
        </div>
    );
}

export default CourseThemes;
