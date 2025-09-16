import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../../../../../components/Button";
import styles from "./ThemeActions.module.css";
import { Dispatch, SetStateAction } from "react";
import { UseCourseApiType } from "../../../../../types/types";
import { useCompleteTheme } from "../../../../../hooks/useCompleteTheme";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import FigureImage from "../../../../../components/FigureImage";
import { PROFESSOR_IMAGE } from "../../../../../consts/images";
import { asNumber, isBoolean, isNumber } from "../../../../../utils/general";

type Props = {
    setIndex: Dispatch<React.SetStateAction<number>>;
    index: number;
    data: UseCourseApiType | undefined;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
};

/**
 * ThemeActions component providing navigation and completion actions for a course theme.
 *
 * - Renders "Previous" and "Next" buttons to navigate between themes, updating the theme index and image slider loading state.
 * - Renders a "Complete" button to mark the current theme as completed, using `useCompleteTheme`.
 * - Disables navigation buttons at the first and last themes, and disables the complete button if the theme is already completed.
 * - Displays a professor image using `FigureImage`.
 *
 * Props:
 *  - `data`: Course data of type `UseCourseApiType`.
 *  - `index`: Current theme index.
 *  - `setIndex`: Function to update the current theme index.
 *  - `setImageSliderLoading`: Function to update the image slider loading state.
 *
 * @returns JSX element representing the theme actions section.
 */

function ThemeActions({ data, index, setImageSliderLoading, setIndex }: Props) {
    const { user } = useUserAuthStore();
    const { mutate } = useCompleteTheme(index, setIndex);

    return (
        <div className={styles.professorAndActions}>
            <div className={styles.actions}>
                <Button
                    disabled={!data?.courses?.content?.themes || index === 1}
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
                        !data?.courses?.content?.themes ||
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
                            courseID: asNumber(data?.courses?.curseID),
                            themeID: index,
                            userID: asNumber(user?.userID),
                        });
                    }}
                    variant="Terciary"
                    disabled={
                        !data?.courses?.content?.themes ||
                        !isBoolean(
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
