import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../../../../../components/Button";
import styles from "./ThemeActions.module.css";
import { Dispatch, SetStateAction } from "react";
import {
    ThemeDefaultCourses,
    UseCourseApiType,
} from "../../../../../types/types";
import { useCompleteTheme } from "../../../../../hooks/useCompleteTheme";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import FigureImage from "../../../../../components/FigureImage";
import { PROFESSOR_IMAGE } from "../../../../../consts/images";
import { asArray, asBoolean, asNumber } from "../../../../../utils/general";

type Props = {
    setIndex: Dispatch<React.SetStateAction<number>>;
    index: number;
    data: UseCourseApiType | undefined;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
};

/**
 * ThemeActions - React component that provides navigation and completion actions for a course theme.
 *
 * Features:
 * - Renders navigation buttons (`Anterior` and `Siguiente`) to move between themes, disabling buttons when at the first or last theme.
 * - Includes a `Completar` button to mark the current theme as completed using `useCompleteTheme` hook.
 * - Displays a professor image using `FigureImage` for visual context.
 * - Manages image slider loading state and theme index updates on navigation.
 * - Safely handles missing or undefined data using utility functions (`asArray`, `asBoolean`, `asNumber`).
 * - Styled with CSS modules for layout and spacing of actions and professor image.
 *
 * Props:
 * - `data`: Course data (`UseCourseApiType | undefined`) containing themes and user theme states.
 * - `index`: Current theme index.
 * - `setIndex`: Function to update the currently selected theme index.
 * - `setImageSliderLoading`: Function to set the image slider loading state.
 *
 * @returns JSX.Element: A control panel for navigating themes, completing them, and displaying a professor image.
 */

function ThemeActions({ data, index, setImageSliderLoading, setIndex }: Props) {
    const { user } = useUserAuthStore();
    const { mutate } = useCompleteTheme(index, setIndex);

    return (
        <div className={styles.professorAndActions}>
            <div className={styles.actions}>
                <Button
                    disabled={
                        !asArray<ThemeDefaultCourses>(
                            data?.courses?.content?.themes
                        ) || index === 1
                    }
                    onClick={() => {
                        setImageSliderLoading(true);
                        setIndex(index - 1);
                    }}
                    variant="Secondary"
                >
                    <FaChevronLeft />
                    Anterior
                </Button>
                <Button
                    disabled={
                        !asArray<ThemeDefaultCourses>(
                            data?.courses?.content?.themes
                        ) ||
                        index ===
                            asNumber(data?.courses?.content?.themes?.length)
                    }
                    variant="Complementary"
                    onClick={() => {
                        setImageSliderLoading(true);
                        setIndex(index + 1);
                    }}
                >
                    Siguiente
                    <FaChevronRight />
                </Button>
                <Button
                    onClick={() => {
                        mutate({
                            courseID: asNumber(data?.courses?.courseID),
                            themeID: index,
                            userID: asNumber(user?.userID),
                        });
                    }}
                    variant="Terciary"
                    disabled={
                        !asArray<ThemeDefaultCourses>(
                            data?.courses?.content?.themes
                        ) ||
                        asBoolean(
                            data?.userThemeStates?.find(
                                (u) => u?.themeID === index
                            )?.completed
                        )
                    }
                >
                    Completar
                </Button>
            </div>
            <div className={styles.professorContainer}>
                <FigureImage
                    src={PROFESSOR_IMAGE.image}
                    alt={PROFESSOR_IMAGE.alt}
                    title={PROFESSOR_IMAGE.alt}
                    width={PROFESSOR_IMAGE.width}
                    height={PROFESSOR_IMAGE.height}
                />
            </div>
        </div>
    );
}

export default ThemeActions;
