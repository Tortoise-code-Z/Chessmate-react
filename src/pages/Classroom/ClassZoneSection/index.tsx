import DataStateWrapper from "../../../components/DataStateWrapperProps";
import LightComponent from "../../../components/LightComponent";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import useDefaultCourseById from "../../../hooks/useDefaultCourseById";
import { DefualtCourse } from "../../../types/types";
import BoardZone from "./BoardZone";
import styles from "./ClassZoneSection.module.css";
import ExplanationTheme from "./ExplanationTheme";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

function ClassZoneSection({}: Props) {
    const params = useParams();

    const { data, isLoading, error } = useDefaultCourseById(
        DATABASE_KEY,
        Number(params.id)
    );

    const [index, setIndex] = useState<number>(0);
    const [imageSliderLoading, setImageSliderLoading] =
        useState<boolean>(false);

    useEffect(() => setIndex(0), [params.id]);

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
