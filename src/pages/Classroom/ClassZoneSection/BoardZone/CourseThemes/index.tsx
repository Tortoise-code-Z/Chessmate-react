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
