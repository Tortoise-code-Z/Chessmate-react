import DataStateWrapper from "../../../components/DataStateWrapperProps";
import LightComponent from "../../../components/LightComponent";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import useDefaultCourseById from "../../../hooks/useDefaultCourseById";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { UseCourseApiType } from "../../../types/types";
import BoardZone from "./BoardZone";
import styles from "./ClassZoneSection.module.css";
import ExplanationTheme from "./ExplanationTheme";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

function ClassZoneSection({}: Props) {
    const { user } = useUserAuthStore();
    const params = useParams();

    const { data, isLoading, error } = useDefaultCourseById(
        DATABASE_KEY,
        Number(params.id),
        user?.userID as number
    );

    // Index used to indicate what theme you are on
    const [index, setIndex] = useState<number>(1);

    // A loading to avoid flickering in images when changing themes
    const [imageSliderLoading, setImageSliderLoading] =
        useState<boolean>(false);

    useEffect(() => setIndex(1), [params.id]);

    return (
        <section className={styles.classZoneSection}>
            <LightComponent top={20} right={25} />
            <DataStateWrapper isLoading={isLoading} error={error}>
                <BoardZone
                    data={data || ({} as UseCourseApiType)}
                    setIndex={setIndex}
                    index={index}
                    imageSliderLoading={imageSliderLoading}
                    setImageSliderLoading={setImageSliderLoading}
                />
                <ExplanationTheme
                    data={data || ({} as UseCourseApiType)}
                    setIndex={setIndex}
                    index={index}
                    setImageSliderLoading={setImageSliderLoading}
                />
            </DataStateWrapper>
        </section>
    );
}

export default ClassZoneSection;
