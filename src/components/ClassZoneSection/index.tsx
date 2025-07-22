import BoardZone from "./BoardZone";
import styles from "./ClassZoneSection.module.css";
import ExplanationTheme from "./ExplanationTheme";
import { useState } from "react";
import DataStateWrapper from "../DataStateWrapperProps";
import { DefualtCourse } from "../../types/types";
import { JSON_URL } from "../../consts/url";
import useDefaultCourseById from "../../hooks/useDefaultCourseById";
import { useParams } from "react-router-dom";
import LightComponent from "../LightComponent";

type Props = {};

function ClassZoneSection({}: Props) {
    const params = useParams();

    const { data, isLoading, error } = useDefaultCourseById(
        JSON_URL,
        Number(params.id)
    );

    const [index, setIndex] = useState<number>(0);

    const [imageSliderLoading, setImageSliderLoading] =
        useState<boolean>(false);

    return (
        <section className={[styles.classZoneSection].join(" ")}>
            <LightComponent top={20} right={25} />
            <DataStateWrapper isLoading={isLoading} error={error}>
                <BoardZone
                    data={data || ({} as DefualtCourse)}
                    setIndex={setIndex}
                    index={index}
                    imageSliderLoading={imageSliderLoading}
                    setImageSliderLoading={setImageSliderLoading}
                />
                <ExplanationTheme
                    data={data || ({} as DefualtCourse)}
                    setIndex={setIndex}
                    index={index}
                    setImageSliderLoading={setImageSliderLoading}
                />
            </DataStateWrapper>
        </section>
    );
}

export default ClassZoneSection;
