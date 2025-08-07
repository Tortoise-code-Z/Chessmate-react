import { Dispatch, SetStateAction } from "react";
import styles from "./BoardZone.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { UseCourseApiType } from "../../../../types/types";
import Button from "../../../../components/Button";
import AutoSliderImages from "./AutoSliderImages";

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
            <div>
                <figure className={[styles.board].join(" ")}>
                    <AutoSliderImages
                        images={
                            data.courses.content.themes.find(
                                (t) => t.id === index
                            )?.images || ([] as string[])
                        }
                        time={1000}
                        themeTitle={
                            data.courses.content.themes.find(
                                (t) => t.id === index
                            )?.title || ""
                        }
                        loading={imageSliderLoading}
                        setLoading={setImageSliderLoading}
                    />
                </figure>
            </div>

            <div className={[styles.themes].join(" ")}>
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
                        {data.userThemeStates.find(
                            (u) => u.themeID === theme.id
                        )?.completed && (
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
