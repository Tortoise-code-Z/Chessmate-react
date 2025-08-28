import { Course, IsObtainedCourse } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./GeneralCourseData.module.css";
import PurchaseAction from "../../../../components/PurchaseAction";
import FigureImage from "../../../../components/FigureImage";
import TitleHx from "../../../../components/TitleHx";

type Props = {
    data: Course & IsObtainedCourse;
};

/**
 * GeneralCourseData component that displays main information about a course.
 *
 * Features:
 * - `FigureImage`: Displays the course thumbnail image with proper sizing and alt/title attributes.
 * - Course data section showing:
 *   - Title
 *   - Short description
 *   - Level
 *   - Price
 * - `PurchaseAction`: Button or component for purchasing the course, considering if it's already obtained.
 *
 * Props:
 * - `data` (Course & IsObtainedCourse): Course object containing all necessary information including purchase status.
 *
 * @returns JSX element rendering the general course information section with image and purchase action.
 */

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
