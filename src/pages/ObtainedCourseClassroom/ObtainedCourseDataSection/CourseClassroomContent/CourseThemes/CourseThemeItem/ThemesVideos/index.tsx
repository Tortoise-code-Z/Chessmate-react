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

function ThemeVideos({ setShowVideo, theme }: Props) {
    return (
        <div className={[styles.videosContainer].join(" ")}>
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
