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
    disabled?: boolean;
};

/**
 * CourseThemeItem component that renders a single theme item within the course themes list.
 *
 * Features:
 * - ThemeButton to toggle the display of the theme's videos.
 * - ThemeVideos displaying the list of videos for the theme when it is active.
 *
 * Props:
 * - videosIndex: Index of the currently active theme's videos.
 * - setVideosIndex: Function to update the currently active theme index.
 * - setShowVideo: Function to set the currently selected video for playback.
 * - theme: Object containing the theme details and associated videos.
 *
 * @returns JSX element rendering a single course theme with toggleable video list.
 */

function CourseThemeItem({
    videosIndex,
    theme,
    setVideosIndex,
    setShowVideo,
    disabled = false,
}: Props) {
    return (
        <div className={styles.themeContainer}>
            <ThemeButton
                setVideosIndex={setVideosIndex}
                videosIndex={videosIndex}
                theme={theme}
                disabled={disabled}
            />
            {videosIndex === theme.id && !!theme.id && (
                <ThemeVideos theme={theme} setShowVideo={setShowVideo} />
            )}
        </div>
    );
}

export default CourseThemeItem;
