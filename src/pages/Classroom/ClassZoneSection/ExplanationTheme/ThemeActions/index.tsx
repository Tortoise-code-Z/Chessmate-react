import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../../../../../components/Button";
import styles from "./ThemeActions.module.css";
import ProfessorImage from "../../../../../components/ProfessorImage";
import { Dispatch, SetStateAction } from "react";
import { UseCourseApiType } from "../../../../../types/types";
import { useCompleteTheme } from "../../../../../hooks/useCompleteTheme";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";

type Props = {
    setIndex: Dispatch<React.SetStateAction<number>>;
    index: number;
    data: UseCourseApiType;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
};

function ThemeActions({ data, index, setImageSliderLoading, setIndex }: Props) {
    const { user } = useUserAuthStore();
    const { mutate } = useCompleteTheme(index, setIndex);

    return (
        <div className={styles.professorAndActions}>
            <div className={styles.actions}>
                <Button
                    disabled={index === 1}
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
                    disabled={index === data.courses.content.themes.length}
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
                            courseID: data.courses.curseID,
                            themeID: index,
                            userID: user?.userID as number,
                        });
                    }}
                    variant="Terciary"
                    disabled={
                        data.userThemeStates.find((u) => u.themeID === index)
                            ?.completed
                    }
                >
                    Completar
                </Button>
            </div>
            <div className={styles.professorContainer}>
                <ProfessorImage />
            </div>
        </div>
    );
}

export default ThemeActions;
