import { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./VideoReproductor.module.css";
import TitleHx from "../../../../components/TitleHx";
import Button from "../../../../components/Button";
import { useCompleteThemeOC } from "../../../../hooks/useCompleteThemeOC";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import { VideoData } from "../../../../types/types";
import { useParams } from "react-router-dom";
import CheckSvgComponent from "../../../../components/CheckSvgComponent";
import { asBoolean, asNumber, asString } from "../../../../utils/general";
import { AnimatedPlayer } from "../../../../components/AnimatedReactPlayer";
import { AnimatedInView } from "../../../../components/AnimatedInView";
type Props = {
    classNames?: string[];
    title: string | undefined;
    setShowVideo: Dispatch<SetStateAction<VideoData | null>>;
    videoData: VideoData;
};

/**
 * VideoReproductor - React component that displays a video player with controls and completion actions.
 *
 * Features:
 * - Plays video content using `AnimatedPlayer` with entry animation options.
 * - Provides "Volver" and "Completar" buttons for navigation and marking the video as completed.
 * - Displays the video title using `TitleHx`.
 * - Shows a completion checkmark (`CheckSvgComponent`) if the video has already been completed by the user.
 * - Locks body scroll while the video player is open and restores it on unmount.
 * - Integrates with user authentication and theme completion hooks (`useUserAuthStore`, `useCompleteThemeOC`).
 * - Safely handles undefined or missing data with utility functions (`asBoolean`, `asNumber`, `asString`).
 *
 * Props:
 * - `classNames` (optional): Array of additional CSS class names to apply to the video player.
 * - `title`: Title of the video being displayed.
 * - `setShowVideo`: State setter to show or hide the video, receives `VideoData | null`.
 * - `videoData`: Object containing video information and user's progress (`VideoData`).
 *
 * @returns JSX.Element: A video player with title, completion actions, and optional completion indicator.
 */

function VideoReproductor({
    classNames = [],
    title,
    setShowVideo,
    videoData,
}: Props) {
    const { user } = useUserAuthStore();
    const params = useParams();

    const { mutate } = useCompleteThemeOC(
        asNumber(Number(params.id)),
        asNumber(user?.userID),
        setShowVideo
    );

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    console.log(
        "asString(videoData?.subthemeContent?.video)",
        asString(videoData?.subthemeContent?.video)
    );

    return (
        <div className={styles.videoReproductor}>
            <div className={styles.container}>
                <AnimatedPlayer
                    className={classNames.join(" ")}
                    src={asString(videoData?.subthemeContent?.video)}
                    animatedOptions={{ direction: "down" }}
                />
                <AnimatedInView>
                    <div className={styles.actions}>
                        <div className={styles.btnActions}>
                            <Button
                                onClick={() => setShowVideo(null)}
                                variant="Secondary"
                            >
                                Volver
                            </Button>
                            <Button
                                disabled={asBoolean(
                                    videoData?.userThemeData?.completed
                                )}
                                onClick={() =>
                                    mutate({
                                        courseID: asNumber(Number(params.id)),
                                        userID: asNumber(user?.userID),
                                        subThemeID: asNumber(
                                            videoData?.subthemeContent?.id
                                        ),
                                        themeID: asNumber(videoData?.themeID),
                                    })
                                }
                                variant="Terciary"
                            >
                                Completar
                            </Button>
                        </div>

                        <TitleHx classNames={[styles.title]} level={3}>
                            {title}
                        </TitleHx>

                        {asBoolean(videoData?.userThemeData?.completed) && (
                            <CheckSvgComponent
                                right={99}
                                top={-10}
                                type="percent"
                                size="medium"
                            />
                        )}
                    </div>
                </AnimatedInView>
            </div>
        </div>
    );
}

export default VideoReproductor;
