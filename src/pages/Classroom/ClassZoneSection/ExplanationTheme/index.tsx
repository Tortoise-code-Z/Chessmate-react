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
