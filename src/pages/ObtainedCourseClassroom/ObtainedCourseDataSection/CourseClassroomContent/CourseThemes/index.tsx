import { Dispatch, SetStateAction, useState } from "react";
import styles from "./CourseThemes.module.css";
import CourseThemeItem from "./CourseThemeItem";
import {
    Theme,
    ThemesUserStatesOC,
    VideoData,
    WarningMsgType,
} from "../../../../../types/types";
import { TITLE_DEFAULT_MSG } from "../../../../../consts/general";
import SecurityRendering from "../../../../../components/SecurityRendering";
import WarningMsg from "../../../../../components/WarningMsg";
import { useCourseClassroomApi } from "../../../../../hooks/useCourseClassroom";
import MsgEmpty from "../../../../../components/MsgEmpty";
import {
    asArray,
    asNumber,
    asString,
    isNumber,
    isString,
} from "../../../../../utils/general";

type Props = {
    data: useCourseClassroomApi | undefined;
    setShowVideo: Dispatch<SetStateAction<VideoData | null>>;
};

/**
 * CourseThemes - React component responsible for rendering the list of themes
 * and their corresponding subthemes for a given course within the classroom view.
 *
 * Features:
 * - Displays an introductory paragraph describing the course structure and subthemes.
 * - Uses `SecurityRendering` to safely render theme data with validation checks.
 * - Handles warnings related to missing or incorrect theme data with `WarningMsg`.
 * - Renders each theme using `CourseThemeItem`, passing user progress data and video state.
 * - Manages selected video playback state (`videosIndex`) and warning state (`themesWarning`).
 *
 * Props:
 * - `data`: Object containing course classroom API data (`useCourseClassroomApi`) or undefined.
 * - `setShowVideo`: Function to set the currently selected video for playback.
 *
 * State:
 * - `videosIndex`: Tracks the index of the currently selected video.
 * - `themesWarning`: Stores warning messages related to the theme data.
 *
 * @returns JSX.Element: A container displaying course themes, subthemes, and video playback capability.
 */

function CourseThemes({ data, setShowVideo }: Props) {
    const [videosIndex, setVideosIndex] = useState<number | null>(null);
    const [themesWarning, setThemesWarnings] = useState<WarningMsgType | null>(
        null
    );

    return (
        <div className={styles.themesContainer}>
            <div className={styles.introductionContainer}>
                <p className={styles.introduction}>
                    En esta sección encontrarás una serie de temas organizados,
                    sobre el curso{" "}
                    <span
                        className={["span-pr-color", "text-medium"].join(" ")}
                    >
                        {asString(data?.course?.title) || TITLE_DEFAULT_MSG}
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

            {(themesWarning?.emptyMsg || themesWarning?.msg) && (
                <WarningMsg
                    msg={
                        themesWarning?.emptyMsg
                            ? themesWarning.emptyMsg
                            : themesWarning.msg
                    }
                />
            )}

            <SecurityRendering<Theme>
                data={data?.course?.content?.themes}
                conditions={data?.course?.content?.themes?.map((t) =>
                    isNumber(t?.id)
                )}
                noCriticalConditions={data?.course?.content?.themes?.map(
                    (t) => isString(t?.title) && isString(t?.description)
                )}
                state={{
                    setWarningState: setThemesWarnings,
                    warningState: themesWarning,
                }}
                msg="Algunos temas no se han obtenido de forma correcta. Estamos trabajando para solucionarlo."
                msgEmpty="No se han podido recuperar los temas. Estamos trabajando para solucionarlo."
                emptyNode={<MsgEmpty />}
            >
                {(theme, index, canRender) => {
                    return (
                        <CourseThemeItem
                            key={asNumber(theme?.id || index)}
                            setShowVideo={setShowVideo}
                            theme={theme}
                            userThemeData={asArray<ThemesUserStatesOC>(
                                data?.themes
                            )?.find((t) => t?.themeID === asNumber(theme?.id))}
                            setVideosIndex={setVideosIndex}
                            videosIndex={videosIndex}
                            disabled={!canRender ? true : false}
                            index={index}
                        />
                    );
                }}
            </SecurityRendering>
        </div>
    );
}

export default CourseThemes;
