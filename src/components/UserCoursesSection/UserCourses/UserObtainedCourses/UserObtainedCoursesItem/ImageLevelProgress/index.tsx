import { CourseJSON, Progress } from "../../../../../../types/types";
import { getImage, getImageSize } from "../../../../../../utils/images";
import FigureImage from "../../../../../FigureImage";
import styles from "./ImageLevelProgress.module.css";

type Props = {
    data: CourseJSON & Progress;
};

function ImageLevelProgress({ data }: Props) {
    const image = getImage(data.imageUrl.thumb, ["courses"]);
    return (
        <div className={styles.container}>
            <FigureImage
                src={image}
                alt={data.title}
                title={data.title}
                width={getImageSize(image, "width")}
                height={getImageSize(image, "height")}
            />

            <div className={styles.data}>
                <p className={styles.level}>{data.level}</p>
                <p className={styles.progress}>Progress: {data.progress}%</p>
            </div>
        </div>
    );
}

export default ImageLevelProgress;
