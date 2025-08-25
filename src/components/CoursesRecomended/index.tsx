import CoursesDisplay from "../CoursesDisplay";
import DataStateWrapper from "../DataStateWrapperProps";
import LightComponent from "../LightComponent";
import useUnpurchasedCourses from "../../hooks/useUnpurchasedCourses";
import { CourseJSON } from "../../types/types";
import styles from "./CoursesRecomended.module.css";
import { ReactNode } from "react";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import TitleHx from "../TitleHx";

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
        DATABASE_KEY,
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
            <TitleHx
                classNames={[styles[titleClassMap[titleDisplay][titleAlign]]]}
                level={2}
            >
                {titleContain}
            </TitleHx>

            <DataStateWrapper isLoading={isLoading} error={error}>
                <CoursesDisplay
                    courses={data ?? ([] as CourseJSON[])}
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
