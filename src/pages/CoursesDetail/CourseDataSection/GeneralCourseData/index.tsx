import { Course, IsObtainedCourse } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./GeneralCourseData.module.css";
import PurchaseAction from "../../../../components/PurchaseAction";
import FigureImage from "../../../../components/FigureImage";
import TitleHx from "../../../../components/TitleHx";

type Props = {
    data: Course & IsObtainedCourse;
};

function GeneralCourseData({ data }: Props) {
    return (
        <div className={styles.generalCourseData}>
            <FigureImage
                src={getImage(data.imageUrl.thumb, ["courses"])}
                alt={data.title}
                title={data.title}
                width={getImageSize(data.imageUrl.thumb, "width")}
                height={getImageSize(data.imageUrl.thumb, "height")}
            />

            <div className={styles.dataContainer}>
                <div className={styles.data}>
                    <TitleHx>{data.title}</TitleHx>
                    <p className={styles.description}>
                        {data.shortDescription}
                    </p>
                    <span className={styles.level}>{data.level}</span>
                    <p className={styles.price}>{data.price} $</p>
                </div>
                <PurchaseAction
                    courseID={data.curseID}
                    isObtained={data.isObtained}
                />
            </div>
        </div>
    );
}

export default GeneralCourseData;
