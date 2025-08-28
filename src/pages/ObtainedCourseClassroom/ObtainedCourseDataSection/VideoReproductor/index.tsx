import { useEffect } from "react";
import styles from "./VideoReproductor.module.css";
import ReactPlayer from "react-player";
import TitleHx from "../../../../components/TitleHx";
import Button from "../../../../components/Button";
type Props = {
    src: string;
    classNames?: string[];
    title: string;
    onClick: () => void;
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

function VideoReproductor({ src, classNames = [], title, onClick }: Props) {
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
                    src={src}
                    controls
                />
                <div className={styles.actions}>
                    <Button onClick={onClick} variant="Secondary">
                        Volver
                    </Button>
                    <TitleHx classNames={[styles.title]} level={3}>
                        {title}
                    </TitleHx>
                </div>
            </div>
        </div>
    );
}

export default VideoReproductor;
