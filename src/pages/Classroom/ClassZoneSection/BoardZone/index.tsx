import { Dispatch, SetStateAction } from "react";
import styles from "./BoardZone.module.css";
import { UseCourseApiType } from "../../../../types/types";
import Board from "./Board";
import CourseThemes from "./CourseThemes";

type Props = {
    data: UseCourseApiType;
    setIndex: Dispatch<SetStateAction<number>>;
    index: number;
    imageSliderLoading: boolean;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
};

function BoardZone({
    setIndex,
    index,
    data,
    imageSliderLoading,
    setImageSliderLoading,
}: Props) {
    return (
        <div className={[styles.boardContainer].join(" ")}>
            <Board
                data={data}
                index={index}
                imageSliderLoading={imageSliderLoading}
                setImageSliderLoading={setImageSliderLoading}
            />

            <CourseThemes
                data={data}
                setIndex={setIndex}
                index={index}
                setImageSliderLoading={setImageSliderLoading}
            />
        </div>
    );
}

export default BoardZone;
