import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./CourseThemes.module.css";
import CourseThemeItem from "./CourseThemeItem";
import {
    Theme,
    ThemesUserStatesOC,
    VideoData,
    WarningMsgType,
} from "../../../../../types/types";

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
    const { t } = useTranslation("classroom");

    return (
        <div className={styles.themesContainer}>
            <div className={styles.introductionContainer}>
                <p className={styles.introduction}>
                    {t("intro.pre")}{" "}
                    <span
                        className={["span-pr-color", "text-medium"].join(" ")}
                    >
                        {asString(data?.course?.title) || t("common:defaults.title")}
                    </span>{" "}
                    {t("intro.mid")}{" "}
                    <span
                        className={["span-compl-color", "text-medium"].join(
                            " "
                        )}
                    >
                        {t("intro.subthemes")}
                    </span>
                    {t("intro.end")}
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
                msg={t("themes.warning")}
                msgEmpty={t("themes.emptyError")}
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
