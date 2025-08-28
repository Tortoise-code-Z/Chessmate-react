import { Dispatch, SetStateAction } from "react";
import styles from "./ThemeVideos.module.css";
import { Theme, ThemeContent } from "../../../../../../../types/types";
import Button from "../../../../../../../components/Button";
import FigureImage from "../../../../../../../components/FigureImage";
import { getImage, getImageSize } from "../../../../../../../utils/images";
import TitleHx from "../../../../../../../components/TitleHx";

type Props = {
    theme: Theme;
    setShowVideo: Dispatch<SetStateAction<ThemeContent | null>>;
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

function ThemeVideos({ setShowVideo, theme }: Props) {
    return (
        <div className={styles.videosContainer}>
            {theme.content.map((subtheme) => (
                <>
                    <Button
                        onClick={() => setShowVideo(subtheme)}
                        classNames={[styles.videoButton]}
                        variant="Card"
                    >
                        <FigureImage
                            classNames={[styles.videoCardImage]}
                            src={getImage(subtheme.cover, ["static"])}
                            alt={subtheme.title}
                            title={subtheme.title}
                            width={getImageSize(subtheme.cover, "width")}
                            height={getImageSize(subtheme.cover, "height")}
                        />
                        <TitleHx level={3} classNames={[styles.title]}>
                            {subtheme.title}
                        </TitleHx>
                    </Button>
                </>
            ))}
        </div>
    );
}

export default ThemeVideos;
