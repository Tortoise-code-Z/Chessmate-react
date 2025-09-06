import { CourseJSON, IsObtainedCourse } from "../../../types/types";
import { getImage, getImageSize } from "../../../utils/images";
import styles from "./ItemCourseDisplayDefault.module.css";
import PurchaseAction from "../../PurchaseAction";
import TitleHx from "../../TitleHx";
import FigureImage from "../../FigureImage";
import { DEFAULT_COURSES_VALUES } from "../../../consts/general";

type Props = {
    action?: boolean;
    data: CourseJSON & IsObtainedCourse;
    display?: "Row" | "Col";
    courseID: number;
};

/**
 * ItemCourseDisplay - Component to display a single course item.
 *
 * Renders course image, title, description, level, and optionally purchase action with price.
 * Clicking the component navigates to the course detail page.
 *
 * @param data - The course data, may include an `isObtained` flag to indicate if the user owns it.
 * @param action - Optional boolean to show purchase actions (default: true).
 * @param display - Layout type: "Row" or "Col" (default: "Col").
 * @param courseID - Unique identifier for the course, used in purchase actions and navigation.
 */

function ItemCourseDisplayDefault({
    data,
    action = true,
    display = "Col",
    courseID,
}: Props) {
    return (
        <div
            className={
                display === "Row"
                    ? styles.itemRowContainer
                    : styles.itemContainer
            }
        >
            <FigureImage
                src={getImage(data?.imageUrl?.thumb, ["courses"])}
                alt={data?.title}
                title={data?.title}
                width={getImageSize(data?.imageUrl?.thumb, "width")}
                height={getImageSize(data?.imageUrl?.thumb, "height")}
            />

            <div className={styles.itemDataContainer}>
                <div className={styles.itemData}>
                    <TitleHx level={3}>
                        {data?.title || DEFAULT_COURSES_VALUES.title}
                    </TitleHx>
                    <p className={styles.description}>
                        {data?.shortDescription ||
                            DEFAULT_COURSES_VALUES.shortDescription}
                    </p>
                    <p className={styles.level}>
                        {data?.level || DEFAULT_COURSES_VALUES.level}
                    </p>
                </div>
                {action && (
                    <div className={styles.actionsPrice}>
                        <PurchaseAction
                            disabled={true}
                            canBuy={!!data.price}
                            courseID={courseID}
                            isObtained={data.isObtained}
                        />
                        <p className={styles.price}>
                            {data?.price
                                ? `${data.price}$`
                                : DEFAULT_COURSES_VALUES.price}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemCourseDisplayDefault;
