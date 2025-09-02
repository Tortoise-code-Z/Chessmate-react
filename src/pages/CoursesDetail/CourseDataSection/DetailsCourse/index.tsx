import { ReactNode } from "react";
import { Course } from "../../../../types/types";
import styles from "./DetailsCourse.module.css";
import TitleHx from "../../../../components/TitleHx";
import { DEFAULT_COURSES_VALUES } from "../../../../consts/general";

type Props = {
    data: Course;
    type: "content" | "learn";
    titleContain: ReactNode;
};

/**
 * DetailsCourse component that displays detailed sections of a course, either content or learning objectives.
 *
 * Features:
 * - `TitleHx`: Displays the section title passed via `titleContain`.
 * - Unordered list of themes based on the `type` prop ("content" or "learn").
 * - Detailed description paragraphs corresponding to the selected type.
 *
 * Props:
 * - `data` (Course): The course object containing content and learning information.
 * - `type` ("content" | "learn"): Determines which section of the course to display.
 * - `titleContain` (ReactNode): JSX element or string to be displayed as the section title.
 *
 * @returns JSX element rendering the detailed course section with themes and descriptions.
 */

function DetailsCourse({ data, titleContain, type }: Props) {
    const typeData = type === "content" ? "content" : "toLearn";

    return (
        <div className={styles.detailsCourse}>
            <TitleHx level={2}>{titleContain}</TitleHx>

            <ul className={styles.themesList}>
                {data?.[typeData]?.themes.map((t) => (
                    <li
                        className={
                            typeData === "content"
                                ? styles.contentItem
                                : styles.toLearnItem
                        }
                        key={t.id}
                    >
                        {t?.title ||
                            DEFAULT_COURSES_VALUES[typeData].themes.title}
                    </li>
                ))}
            </ul>

            <div className={styles.description}>
                {data?.[typeData]?.detailDescription
                    ? data?.[typeData]?.detailDescription?.map((t) => (
                          <p className={styles.descriptionItem} key={t}>
                              {t}
                          </p>
                      ))
                    : DEFAULT_COURSES_VALUES.content.detailDescription}
            </div>
        </div>
    );
}

export default DetailsCourse;
