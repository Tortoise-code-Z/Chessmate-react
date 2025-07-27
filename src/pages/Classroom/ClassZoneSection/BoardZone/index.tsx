import { Dispatch, SetStateAction } from "react";
import styles from "./BoardZone.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { DefualtCourse } from "../../../../types/types";
import Button from "../../../../components/Button";
import AutoSliderImages from "../../AutoSliderImages";

type Props = {
    data: DefualtCourse;
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
            <div>
                <figure className={[styles.board].join(" ")}>
                    <AutoSliderImages
                        images={data.content.themes[index].images}
                        time={1000}
                        themeTitle={data.content.themes[index].title}
                        loading={imageSliderLoading}
                        setLoading={setImageSliderLoading}
                    />
                </figure>
            </div>

            <div className={[styles.themes].join(" ")}>
                {data.content.themes.map((theme, i) => (
                    <Button
                        classNames={["p-relative"]}
                        key={theme.title}
                        onClick={() => {
                            setImageSliderLoading(true);
                            setIndex(i);
                        }}
                        variant={index === i ? "Primary" : "Secondary"}
                    >
                        {theme.completed && (
                            <FaCheckCircle
                                className={[styles.completedIcon].join(" ")}
                            />
                        )}

                        {theme.title}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default BoardZone;
