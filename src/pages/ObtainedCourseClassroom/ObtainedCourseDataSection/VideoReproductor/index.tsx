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
 * VideoReproductor component that renders a video player with title and actions.
 *
 * Features:
 * - ReactPlayer to play the provided video source with controls.
 * - "Volver" button to trigger a custom onClick action.
 * - TitleHx displaying the video title.
 * - Prevents body scrolling while the video player is mounted.
 *
 * Props:
 * - src: URL of the video to be played.
 * - classNames: Optional array of CSS class names to apply to the ReactPlayer.
 * - title: Title of the video.
 * - onClick: Callback function triggered when the "Volver" button is clicked.
 *
 * @returns JSX element rendering the video player with controls, title, and actions.
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
