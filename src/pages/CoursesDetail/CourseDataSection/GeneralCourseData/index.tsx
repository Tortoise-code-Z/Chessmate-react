import { Course, IsObtainedCourse } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./GeneralCourseData.module.css";
import PurchaseAction from "../../../../components/PurchaseAction";

type Props = {
    data: Course & IsObtainedCourse;
};

function GeneralCourseData({ data }: Props) {
    return (
        <div className={[styles.generalCourseData].join(" ")}>
            <figure>
                <img
                    src={getImage(data.imageUrl.thumb, ["courses"])}
                    alt={data.title}
                    title={data.title}
                    width={getImageSize(data.imageUrl.thumb, "width")}
                    height={getImageSize(data.imageUrl.thumb, "height")}
                />
            </figure>
            <div>
                <div>
                    <h2>{data.title}</h2>
                    <p className={[styles.description].join(" ")}>
                        {data.shortDescription}
                    </p>
                    <span className={[styles.level].join(" ")}>
                        {data.level}
                    </span>
                    <p className={[styles.price].join(" ")}>{data.price} $</p>
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
