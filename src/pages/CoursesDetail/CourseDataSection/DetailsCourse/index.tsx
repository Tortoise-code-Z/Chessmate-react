import { ReactNode, useState } from "react";
import { Course, Theme, ToLearnTheme } from "../../../../types/types";
import styles from "./DetailsCourse.module.css";
import TitleHx from "../../../../components/TitleHx";
import { DEFAULT_COURSES_VALUES } from "../../../../consts/general";
import WarningMsg from "../../../../components/WarningMsg";
import SecurityRendering from "../../../../components/SecurityRendering";

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

function DetailsCourse({ data, titleContain, type = "content" }: Props) {
    const typeData = type === "content" ? "content" : "toLearn";
    const [warningDetail, setWarningDetail] = useState<string | null>(null);

    return (
        <div className={styles.detailsCourse}>
            <TitleHx level={2}>{titleContain}</TitleHx>

            {warningDetail && <WarningMsg msg={warningDetail} />}

            <ul className={styles.themesList}>
                {typeData === "content" ? (
                    <SecurityRendering<Theme>
                        data={data?.[typeData]?.themes}
                        conditions={data?.[typeData]?.themes.map(
                            (t) => !!t.title
                        )}
                        state={{
                            setWarningState: setWarningDetail,
                            warningState: warningDetail,
                        }}
                        msg="Algunos datos sobre los temas no se han podido recuperar. Estamos trabajando en ello."
                    >
                        {(theme, index, _canRender) => {
                            return (
                                <li
                                    className={styles.contentItem}
                                    key={theme.id || index}
                                >
                                    {theme?.title ||
                                        DEFAULT_COURSES_VALUES[typeData].themes
                                            .title}
                                </li>
                            );
                        }}
                    </SecurityRendering>
                ) : (
                    <SecurityRendering<ToLearnTheme>
                        data={data?.[typeData]?.themes}
                        conditions={data?.[typeData]?.themes.map(
                            (t) => !!t.title
                        )}
                        state={{
                            setWarningState: setWarningDetail,
                            warningState: warningDetail,
                        }}
                        msg="Algunos datos sobre los puntos a aprender no se han podido recuperar. Estamos trabajando en ello."
                    >
                        {(theme, index, _canRender) => {
                            return (
                                <li
                                    className={styles.toLearnItem}
                                    key={theme.id || index}
                                >
                                    {theme?.title ||
                                        DEFAULT_COURSES_VALUES[typeData].themes
                                            .title}
                                </li>
                            );
                        }}
                    </SecurityRendering>
                )}
            </ul>

            <div className={styles.description}>
                <SecurityRendering<string>
                    data={data?.[typeData]?.detailDescription}
                    conditions={data?.[typeData]?.detailDescription.map(
                        (t) => !!t
                    )}
                    state={{
                        setWarningState: setWarningDetail,
                        warningState: warningDetail,
                    }}
                    msg="Algunos datos no se han podido recuperar. Estamos trabajando en ello."
                >
                    {(description, index, canRender) => {
                        if (!canRender) return null;
                        return (
                            <p className={styles.descriptionItem} key={index}>
                                {description}
                            </p>
                        );
                    }}
                </SecurityRendering>
            </div>
        </div>
    );
}

export default DetailsCourse;
