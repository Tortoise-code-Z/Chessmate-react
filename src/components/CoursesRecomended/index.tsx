import CoursesDisplay from "../CoursesDisplay";
import DataStateWrapper from "../DataStateWrapperProps";
import LightComponent from "../LightComponent";
import { JSON_URL } from "../../consts/url";
import useUnpurchasedCourses from "../../hooks/useUnpurchasedCourses";
import { Course } from "../../types/types";
import styles from "./CoursesRecomended.module.css";
import { ReactNode } from "react";

type Props = {
    titleContain: ReactNode;
    titleDisplay: "Row" | "Col";
    titleAlign: "start" | "center";
    limit: number;
    userID: number | undefined;
};

function CoursesRecomended({
    titleContain,
    titleAlign,
    titleDisplay,
    limit,
    userID,
}: Props) {
    const { data, isLoading, error } = useUnpurchasedCourses(
        JSON_URL,
        limit,
        userID
    );

    const titleClassMap = {
        Col: {
            start: "titleColStart",
            center: "titleColCenter",
        },
        Row: {
            start: "titleRowStart",
            center: "titleRowCenter",
        },
    };

    return (
        <section className={[styles.coursesRecomended].join(" ")}>
            <LightComponent top={40} right={30} />

            <h2
                className={[
                    styles[titleClassMap[titleDisplay][titleAlign]],
                ].join(" ")}
            >
                {titleContain}
            </h2>

            <DataStateWrapper isLoading={isLoading} error={error}>
                <CoursesDisplay
                    courses={data ?? ([] as Course[])}
                    display="Col"
                />
            </DataStateWrapper>
        </section>
    );
}

{
    /* <h2>
                
            </h2> */
}

export default CoursesRecomended;
