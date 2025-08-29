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

/**
 * CoursesRecomended - Component to display a list of recommended courses.
 *
 * Fetches unpurchased courses for a given user and displays them in a column layout.
 * Includes a customizable title with alignment and layout options, and a light visual effect.
 *
 * @param titleContain - ReactNode content to display as the section title.
 * @param titleDisplay - Layout type of the title: "Row" or "Col".
 * @param titleAlign - Alignment of the title: "start" or "center".
 * @param limit - Maximum number of courses to fetch and display.
 * @param userID - ID of the current user (optional), used to filter unpurchased courses.
 */

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
        <section className={styles.coursesRecomended}>
            <LightComponent top={40} right={30} />
            <TitleHx
                classNames={[styles[titleClassMap[titleDisplay][titleAlign]]]}
                level={2}
            >
                {titleContain}
            </TitleHx>

            <DataStateWrapper
                isLoading={isLoading}
                error={error}
                errorMsg="No se ha podido recuperar los cursos."
            >
                <CoursesDisplay
                    courses={data ?? ([] as CourseJSON[])}
                    display="Col"
                />
            </DataStateWrapper>
        </section>
    );
}

export default CoursesRecomended;
