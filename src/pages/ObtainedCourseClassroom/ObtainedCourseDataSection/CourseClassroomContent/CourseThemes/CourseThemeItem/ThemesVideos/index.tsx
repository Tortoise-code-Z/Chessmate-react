import { Dispatch, SetStateAction, useState } from "react";
import styles from "./ThemeVideos.module.css";
import {
    Theme,
    SubthemeContent,
    ThemesUserStatesOC,
    VideoData,
    SubthemesUserStatesOC,
} from "../../../../../../../types/types";
import Button from "../../../../../../../components/Button";
import FigureImage from "../../../../../../../components/FigureImage";
import { getImage, getImageSize } from "../../../../../../../utils/images";
import TitleHx from "../../../../../../../components/TitleHx";
import { DEFAULT_COURSES_VALUES } from "../../../../../../../consts/general";
import SecurityRendering from "../../../../../../../components/SecurityRendering";
import WarningMsg from "../../../../../../../components/WarningMsg";
import CheckSvgComponent from "../../../../../../../components/CheckSvgComponent";
import {
    asArray,
    asNumber,
    asString,
    isNumber,
    isString,
} from "../../../../../../../utils/general";

type Props = {
    theme: Theme;
    setShowVideo: Dispatch<SetStateAction<VideoData | null>>;
    userThemeData: ThemesUserStatesOC | undefined;
};

/**
 * ThemeVideos component that renders the list of video subthemes for a given theme.
 *
 * Features:
 * - Displays each subtheme as a clickable card button.
 * - FigureImage showing the subtheme's cover image with proper dimensions.
 * - TitleHx displaying the subtheme title.
 * - Clicking a subtheme sets it as the currently active video for playback.
 *
 * Props:
 * - theme: Object containing the theme details and its subtheme content.
 * - setShowVideo: Function to set the currently selected subtheme for video playback.
 *
 * @returns JSX element rendering all video subthemes for a course theme.
 */

function ThemeVideos({ setShowVideo, theme, userThemeData }: Props) {
    const [videoWarning, setVideoWarning] = useState<string | null>(null);
    return (
        <>
            {videoWarning && <WarningMsg msg={videoWarning} />}
            <div className={styles.videosContainer}>
                <SecurityRendering<SubthemeContent>
                    data={theme?.content}
                    conditions={theme.content.map(
                        (t) => isNumber(t?.id) && isString(t.video)
                    )}
                    state={{
                        setWarningState: setVideoWarning,
                        warningState: videoWarning,
                    }}
                    msgEmpty="No se han podido recuperar el temario. Estamos trabajando para solucionarlo lo antes posibles."
                >
                    {(subtheme, index, canRender) => {
                        return (
                            <Button
                                key={asNumber(subtheme?.id) || index}
                                disabled={!canRender}
                                onClick={() =>
                                    setShowVideo({
                                        subthemeContent: subtheme,
                                        themeID: asNumber(theme?.id),
                                        userThemeData:
                                            asArray<SubthemesUserStatesOC>(
                                                userThemeData?.subthemes
                                            )?.[index],
                                    })
                                }
                                classNames={[styles.videoButton, "relative"]}
                                variant="Card"
                            >
                                <FigureImage
                                    classNames={[styles.videoCardImage]}
                                    src={getImage(subtheme?.cover, ["static"])}
                                    alt={asString(subtheme?.title)}
                                    title={asString(subtheme?.title)}
                                    width={getImageSize(
                                        asString(subtheme?.cover),
                                        "width"
                                    )}
                                    height={getImageSize(
                                        asString(subtheme?.cover),
                                        "height"
                                    )}
                                />
                                <TitleHx level={3} classNames={[styles.title]}>
                                    {asString(subtheme?.title) ||
                                        DEFAULT_COURSES_VALUES.title}
                                </TitleHx>

                                {asArray<SubthemesUserStatesOC>(
                                    userThemeData?.subthemes
                                )?.find(
                                    (s) =>
                                        asNumber(s?.subthemeID) ===
                                        asNumber(subtheme?.id)
                                )?.completed && (
                                    <CheckSvgComponent size="medium" />
                                )}
                            </Button>
                        );
                    }}
                </SecurityRendering>
            </div>
        </>
    );
}

export default ThemeVideos;
