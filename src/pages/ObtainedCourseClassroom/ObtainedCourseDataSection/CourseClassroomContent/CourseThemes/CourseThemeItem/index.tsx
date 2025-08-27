import { Dispatch, SetStateAction } from "react";
import styles from "./CourseThemeItem.module.css";
import ThemeVideos from "./ThemesVideos";
import ThemeButton from "./ThemeButton";
import { Theme, ThemeContent } from "../../../../../../types/types";

type Props = {
    videosIndex: number | null;
    setVideosIndex: Dispatch<SetStateAction<number | null>>;
    setShowVideo: Dispatch<SetStateAction<ThemeContent | null>>;
    theme: Theme;
};

function CourseThemeItem({
    videosIndex,
    theme,
    setVideosIndex,
    setShowVideo,
}: Props) {
    return (
        <div className={styles.themeContainer}>
            <ThemeButton
                setVideosIndex={setVideosIndex}
                videosIndex={videosIndex}
                theme={theme}
            />
            {videosIndex === theme.id && (
                <ThemeVideos theme={theme} setShowVideo={setShowVideo} />
            )}
        </div>
    );
}

export default CourseThemeItem;
