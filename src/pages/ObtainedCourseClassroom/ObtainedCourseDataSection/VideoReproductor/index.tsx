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
