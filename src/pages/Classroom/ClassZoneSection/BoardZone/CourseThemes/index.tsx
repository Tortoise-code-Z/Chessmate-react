import Button from "../../../../../components/Button";
import styles from "./CourseThemes.module.css";
import {
    ThemeDefaultCourses,
    ThemesUserStates,
    UseCourseApiType,
    WarningMsgType,
} from "../../../../../types/types";
import { Dispatch, SetStateAction } from "react";
import { TITLE_DEFAULT_MSG } from "../../../../../consts/general";
import SecurityRendering from "../../../../../components/SecurityRendering";
import {
    asArray,
    asBoolean,
    asString,
    isArray,
    isBoolean,
    isString,
} from "../../../../../utils/general";
import CheckSvgComponent from "../../../../../components/CheckSvgComponent";
import { AnimatedInView } from "../../../../../components/AnimatedInView";

type Props = {
    data: UseCourseApiType | undefined;
    setIndex: Dispatch<SetStateAction<number>>;
    index: number;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
    classWarning: WarningMsgType | null;
    setClassWarning: Dispatch<SetStateAction<WarningMsgType | null>>;
};

/**
 * CourseThemes - React component that displays a list of course themes as interactive buttons.
 *
 * Features:
 * - Uses `SecurityRendering` to safely render themes only when critical data conditions are met.
 * - Each theme is displayed as a `Button` that sets the current theme index and triggers image slider loading.
 * - Shows a completion checkmark (`CheckSvgComponent`) for themes the user has completed.
 * - Animated entry with `AnimatedInView` for smooth UI transitions.
 * - Validates theme data to ensure sufficient images, title, and description before rendering.
 * - Styled with CSS modules for consistent layout and spacing.
 *
 * Props:
 * - `data`: Course data (`UseCourseApiType | undefined`) containing themes and user theme states.
 * - `setIndex`: Function to update the currently selected theme index.
 * - `index`: Current theme index.
 * - `setImageSliderLoading`: Function to set the image slider loading state.
 * - `classWarning`: Current warning state for the class.
 * - `setClassWarning`: Function to update the class warning state.
 *
 * @returns JSX.Element: A set of theme buttons that allow navigation between course themes with visual completion indicators.
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
        <AnimatedInView config={{ direction: "right", duration: 0.3 }}>
            <div className={styles.themes}>
                <SecurityRendering<ThemeDefaultCourses>
                    data={data?.courses?.content?.themes}
                    conditions={[true]}
                    noCriticalConditions={[
                        isString(data?.courses?.title),
                        isString(data?.courses?.content?.detailDescription),
                        ...themesCondition(data),
                        !!asArray<ThemesUserStates>(
                            data?.userThemeStates
                        )?.every((u) => isBoolean(u?.completed)),
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
                                    index === theme?.id
                                        ? "Primary"
                                        : "Secondary"
                                }
                            >
                                {asBoolean(
                                    asArray<ThemesUserStates>(
                                        data?.userThemeStates
                                    )?.find((u) => u?.themeID === theme?.id)
                                        ?.completed
                                ) && (
                                    <CheckSvgComponent top={-10} right={-10} />
                                )}

                                {asString(theme?.title) || TITLE_DEFAULT_MSG}
                            </Button>
                        );
                    }}
                </SecurityRendering>
            </div>
        </AnimatedInView>
    );
}

export default CourseThemes;
