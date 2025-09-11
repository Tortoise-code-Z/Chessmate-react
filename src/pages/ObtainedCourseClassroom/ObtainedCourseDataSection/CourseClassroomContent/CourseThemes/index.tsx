import { Dispatch, SetStateAction, useState } from "react";
import styles from "./CourseThemes.module.css";
import CourseThemeItem from "./CourseThemeItem";
import { Theme, VideoData } from "../../../../../types/types";
import { DEFAULT_COURSES_VALUES } from "../../../../../consts/general";
import SecurityRendering from "../../../../../components/SecurityRendering";
import WarningMsg from "../../../../../components/WarningMsg";
import { useCourseClassroomApi } from "../../../../../hooks/useCourseClassroom";
import MsgEmpty from "../../../../../components/MsgEmpty";

type Props = {
    data: useCourseClassroomApi | undefined;
    setShowVideo: Dispatch<SetStateAction<VideoData | null>>;
};

/**
 * CourseThemes component that renders the list of themes for a specific course.
 *
 * Features:
 * - Displays an introduction explaining the course structure and video lessons.
 * - Maps through the course's themes and renders each one using CourseThemeItem.
 * - Handles which video is currently active via state.
 *
 * State:
 * - videosIndex: Index of the currently active video or null if none is selected.
 *
 * Props:
 * - data: Object containing course details including themes and content.
 * - setShowVideo: Function to update the currently selected theme content for video playback.
 *
 * @returns JSX element rendering the course themes with video selection functionality.
 */

function CourseThemes({ data, setShowVideo }: Props) {
    const [videosIndex, setVideosIndex] = useState<number | null>(null);
    const [themesWarning, setThemesWarnings] = useState<string | null>(null);

    return (
        <div className={styles.themesContainer}>
            <div className={styles.introductionContainer}>
                <p className={styles.introduction}>
                    En esta sección encontrarás una serie de temas organizados,
                    sobre el curso{" "}
                    <span
                        className={["span-pr-color", "text-medium"].join(" ")}
                    >
                        {data?.course?.title || DEFAULT_COURSES_VALUES.title}
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

            {themesWarning && <WarningMsg msg={themesWarning} />}

            <SecurityRendering<Theme>
                data={data?.course?.content?.themes}
                conditions={data?.course?.content?.themes?.map((t) => !!t?.id)}
                noCriticalConditions={data?.course?.content?.themes?.map(
                    (t) => !!t?.title && !!t?.description
                )}
                state={{
                    setWarningState: setThemesWarnings,
                    warningState: themesWarning,
                }}
                msg="Algunos temas no se han obtenido de forma correcta. Estamos trabajando para solucionarlo."
                msgEmpty="No se han podido recuperar los temas. Estamos trabajando para solucionarlo."
                emptyNode={<MsgEmpty />}
            >
                {(theme, _index, canRender) => {
                    return (
                        <CourseThemeItem
                            key={theme.id}
                            setShowVideo={setShowVideo}
                            theme={theme}
                            userThemeData={data?.themes?.find(
                                (t) => t.themeID === theme.id
                            )}
                            setVideosIndex={setVideosIndex}
                            videosIndex={videosIndex}
                            disabled={!canRender ? true : false}
                        />
                    );
                }}
            </SecurityRendering>
        </div>
    );
}

export default CourseThemes;
