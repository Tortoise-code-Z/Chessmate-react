import { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./VideoReproductor.module.css";
import ReactPlayer from "react-player";
import TitleHx from "../../../../components/TitleHx";
import Button from "../../../../components/Button";
import { useCompleteThemeOC } from "../../../../hooks/useCompleteThemeOC";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import { VideoData } from "../../../../types/types";
import { useParams } from "react-router-dom";
import CheckSvgComponent from "../../../../components/CheckSvgComponent";
type Props = {
    classNames?: string[];
    title: string;
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
        Number(params.id),
        user?.userID as number,
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
                <ReactPlayer
                    className={classNames.join(" ")}
                    src={videoData?.subthemeContent?.video}
                    controls
                />
                <div className={styles.actions}>
                    <div className={styles.btnActions}>
                        <Button
                            onClick={() => setShowVideo(null)}
                            variant="Secondary"
                        >
                            Volver
                        </Button>
                        <Button
                            onClick={() =>
                                mutate({
                                    courseID: Number(params.id),
                                    userID: user?.userID as number,
                                    subThemeID: videoData?.subthemeContent
                                        ?.id as number,
                                    themeID: videoData.themeID,
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

                    {videoData?.userThemeData?.completed && (
                        <CheckSvgComponent
                            right={98.5}
                            top={-1}
                            type="percent"
                            size="medium"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoReproductor;
