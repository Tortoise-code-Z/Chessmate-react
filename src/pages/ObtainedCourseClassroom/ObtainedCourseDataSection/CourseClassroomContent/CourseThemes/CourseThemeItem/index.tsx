import { Dispatch, SetStateAction } from "react";
import styles from "./CourseThemeItem.module.css";
import ThemeVideos from "./ThemesVideos";
import ThemeButton from "./ThemeButton";
import {
    Theme,
    ThemesUserStatesOC,
    VideoData,
} from "../../../../../../types/types";
import { asNumber } from "../../../../../../utils/general";
import { AnimatedInView } from "../../../../../../components/AnimatedInView";

type Props = {
    videosIndex: number | null;
    setVideosIndex: Dispatch<SetStateAction<number | null>>;
    setShowVideo: Dispatch<SetStateAction<VideoData | null>>;
    theme: Theme;
    userThemeData: ThemesUserStatesOC | undefined;
    disabled?: boolean;
    index: number;
};

/**
 * CourseThemeItem - Component responsible for rendering a single course theme.
 *
 * Features:
 * - Displays the theme title as a `ThemeButton`.
 * - Expands to show `ThemeVideos` if the theme is selected (matching `videosIndex`).
 * - Uses `AnimatedInView` to animate the theme container into view from left or right,
 *   alternating based on the theme's index for visual variety.
 *
 * Props:
 * - `videosIndex`: Index of the currently expanded theme; used to control which theme's videos are visible.
 * - `setVideosIndex`: Function to update the currently expanded theme index.
 * - `setShowVideo`: Function to set the currently selected video for playback.
 * - `theme`: Theme object containing id, title, description, and video data.
 * - `userThemeData`: Optional object representing the user's progress on this theme.
 * - `disabled`: Boolean flag to disable interaction with this theme (default: false).
 * - `index`: Index of this theme in the list, used for alternating animation directions.
 *
 * @returns JSX.Element: A container with a clickable theme button and optional video list.
 */

function CourseThemeItem({
    videosIndex,
    theme,
    setVideosIndex,
    setShowVideo,
    disabled = false,
    userThemeData,
    index,
}: Props) {
    return (
        <AnimatedInView
            config={{
                direction: index % 2 === 0 ? "left" : "right",
                options: { threshold: 0.8 },
            }}
        >
            <div className={styles.themeContainer}>
                <ThemeButton
                    setVideosIndex={setVideosIndex}
                    videosIndex={videosIndex}
                    theme={theme}
                    disabled={disabled}
                    userThemeData={userThemeData}
                />
                {videosIndex === asNumber(theme?.id) && (
                    <ThemeVideos
                        theme={theme}
                        setShowVideo={setShowVideo}
                        userThemeData={userThemeData}
                    />
                )}
            </div>
        </AnimatedInView>
    );
}

export default CourseThemeItem;
