import { CourseJSON, Progress } from "../../../../../types/types";
import { getImage, getImageSize } from "../../../../../utils/images";
import styles from "./ImageLevelProgress.module.css";

type Props = {
    data: CourseJSON & Progress;
};

function ImageLevelProgress({ data }: Props) {
    const image = getImage(data.imageUrl.thumb, ["courses"]);
    return (
        <div className={styles.container}>
            <figure>
                <img
                    src={image}
                    alt={data.title}
                    title={data.title}
                    width={getImageSize(image, "width")}
                    height={getImageSize(image, "height")}
                />
            </figure>
            <div className={[styles.data].join(" ")}>
                <p className={[styles.level].join(" ")}>{data.level}</p>
                <p className={[styles.progress].join(" ")}>
                    Progress: {data.progress}%
                </p>
            </div>
        </div>
    );
}

export default ImageLevelProgress;
