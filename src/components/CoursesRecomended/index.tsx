import CoursesDisplay from "../CoursesDisplay";
import DataStateWrapper from "../DataStateWrapperProps";
import LightComponent from "../LightComponent";
import useUnpurchasedCourses from "../../hooks/useUnpurchasedCourses";
import { CourseJSON } from "../../types/types";
import styles from "./CoursesRecomended.module.css";
import { ReactNode } from "react";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import TitleHx from "../TitleHx";
import { asArray, asNumber } from "../../utils/general";
import { AnimatedInView } from "../AnimatedInView";

type Props = {
    titleContain: ReactNode;
    titleDisplay: "Row" | "Col";
    titleAlign: "start" | "center";
    limit: number;
    userID: number | undefined;
};

/**
 * CoursesRecomended - React component to display recommended (unpurchased) courses for a user.
 *
 * Features:
 * - Fetches unpurchased courses for a specific user via `useUnpurchasedCourses`.
 * - Handles loading and error states using `DataStateWrapper`.
 * - Renders courses using `CoursesDisplay`.
 * - Supports configurable section title, alignment, and layout orientation.
 * - Includes decorative elements like `LightComponent` and animated entrance with `AnimatedInView`.
 *
 * Props:
 * - `titleContain`: ReactNode content to display in the section title.
 * - `titleDisplay`: Orientation of the title: `"Row"` or `"Col"`.
 * - `titleAlign`: Alignment of the title text: `"start"` or `"center"`.
 * - `limit`: Maximum number of courses to fetch/display.
 * - `userID`: ID of the current user to fetch personalized recommendations.
 *
 * @returns JSX element: Section with a title and a list of recommended courses.
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
        asNumber(limit),
        asNumber(userID)
    );

    const safeData = asArray<CourseJSON>(data);

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
        <AnimatedInView config={{ options: { threshold: 0.1 } }}>
            <section className={styles.coursesRecomended}>
                <LightComponent top={40} right={30} />
                <TitleHx
                    classNames={[
                        styles[titleClassMap[titleDisplay][titleAlign]],
                    ]}
                    level={2}
                >
                    {titleContain}
                </TitleHx>

                <DataStateWrapper
                    isLoading={isLoading}
                    error={error}
                    errorMsg="No se ha podido recuperar los cursos."
                >
                    <CoursesDisplay courses={safeData} display="Col" />
                </DataStateWrapper>
            </section>
        </AnimatedInView>
    );
}

export default CoursesRecomended;
