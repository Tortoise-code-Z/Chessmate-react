import { Dispatch, SetStateAction, useState } from "react";
import styles from "./CourseThemes.module.css";
import CourseThemeItem from "./CourseThemeItem";
import {
    Course,
    IsObtainedCourse,
    ThemeContent,
} from "../../../../../types/types";

type Props = {
    data: Course & IsObtainedCourse;
    setShowVideo: Dispatch<SetStateAction<ThemeContent | null>>;
};

function CourseThemes({ data, setShowVideo }: Props) {
    const [videosIndex, setVideosIndex] = useState<number | null>(null);

    return (
        <div className={styles.themesContainer}>
            <div className={styles.introductionContainer}>
                <p className={styles.introduction}>
                    En esta sección encontrarás una serie de temas organizados,
                    sobre el curso{" "}
                    <span
                        className={["span-pr-color", "text-medium"].join(" ")}
                    >
                        {data.title}
                    </span>{" "}
                    de manera clara y práctica, pensados para guiarte paso a
                    paso en tu aprendizaje. Cada tema está compuesto por
                    diferentes{" "}
                    <span
                        className={["span-compl-color", "text-medium"].join(
                            " "
                        )}
                    >
                        subtemas
                    </span>{" "}
                    , y para cada uno de ellos tendrás acceso a una clase en
                    video que explica el contenido de forma sencilla y
                    detallada.
                </p>
            </div>

            {data.content.themes?.map((theme) => (
                <CourseThemeItem
                    key={theme.id}
                    setShowVideo={setShowVideo}
                    theme={theme}
                    setVideosIndex={setVideosIndex}
                    videosIndex={videosIndex}
                />
            ))}
        </div>
    );
}

export default CourseThemes;
