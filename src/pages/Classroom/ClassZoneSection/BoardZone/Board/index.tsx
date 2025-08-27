import { Dispatch, SetStateAction } from "react";
import AutoSliderImages from "./AutoSliderImages";
import styles from "./Board.module.css";
import { UseCourseApiType } from "../../../../../types/types";

type Props = {
    data: UseCourseApiType;
    index: number;
    imageSliderLoading: boolean;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
};

function Board({
    data,
    imageSliderLoading,
    index,
    setImageSliderLoading,
}: Props) {
    return (
        <div className={styles.boardZone}>
            <figure className={styles.board}>
                <AutoSliderImages
                    images={
                        data.courses.content.themes.find((t) => t.id === index)
                            ?.images || ([] as string[])
                    }
                    time={1000}
                    themeTitle={
                        data.courses.content.themes.find((t) => t.id === index)
                            ?.title || ""
                    }
                    loading={imageSliderLoading}
                    setLoading={setImageSliderLoading}
                />
            </figure>
        </div>
    );
}

export default Board;
