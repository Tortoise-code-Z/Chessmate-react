import { useNavigate } from "react-router-dom";
import { CourseJSON, IsObtainedCourse, Level } from "../../../types/types";
import { getImage, getImageSize } from "../../../utils/images";
import { PATHS } from "../../../consts/paths";
import styles from "./ItemCourseDisplay.module.css";
import PurchaseAction from "../../PurchaseAction";
import TitleHx from "../../TitleHx";
import FigureImage from "../../FigureImage";
import {
    DESCRIPTION_DEFAULT_MSG,
    LEVEL_DEFAULT_MSG,
    LEVELS,
    PRICE_DEFAULT_MSG,
    TITLE_DEFAULT_MSG,
} from "../../../consts/general";
import {
    asBoolean,
    asNumber,
    asString,
    isNumber,
    isOnValues,
} from "../../../utils/general";

type Props = {
    action?: boolean;
    data: CourseJSON & IsObtainedCourse;
    display?: "Row" | "Col";
    courseID: number | undefined;
    canNavigate?: boolean;
};

/**
 * ItemCourseDisplay - Component to render a single course card with optional actions.
 *
 * Features:
 * - Displays course image, title, short description, level, and price.
 * - Supports optional actions like purchase using `PurchaseAction`.
 * - Supports row or column layout via `display` prop.
 * - Handles navigation to course detail page if `canNavigate` is true.
 * - Fallbacks for missing course data (title, description, level, price) using constants.
 *
 * Props:
 * - `data`: Course object including optional obtained status.
 * - `action`: Boolean to enable action buttons (default: true).
 * - `display`: Layout mode, "Row" or "Col" (default: "Col").
 * - `courseID`: ID of the course.
 * - `canNavigate`: Boolean to allow navigation on card click (default: true).
 *
 * @returns JSX element: A course card with image, title, description, level, and optional actions.
 */

function ItemCourseDisplay({
    data,
    action = true,
    display = "Col",
    courseID,
    canNavigate = true,
}: Props) {
    const navigate = useNavigate();

    const handleClickCard = () => {
        if (canNavigate && courseID)
            navigate(
                PATHS.coursesDetail.replace(":id", data.courseID.toString())
            );
    };

    return (
        <div
            className={[
                display === "Row"
                    ? styles.itemRowContainer
                    : styles.itemContainer,
                !canNavigate ? styles.cantNavigate : "",
            ].join(" ")}
            onClick={handleClickCard}
        >
            <FigureImage
                src={getImage(data?.imageUrl?.thumb, ["courses"])}
                alt={asString(data?.title)}
                title={asString(data?.title)}
                width={getImageSize(data?.imageUrl?.thumb, "width")}
                height={getImageSize(data?.imageUrl?.thumb, "height")}
            />

            <div className={styles.itemDataContainer}>
                <div className={styles.itemData}>
                    <TitleHx level={3}>
                        {asString(data?.title) || TITLE_DEFAULT_MSG}
                    </TitleHx>
                    <p className={styles.description}>
                        {asString(data?.shortDescription) ||
                            DESCRIPTION_DEFAULT_MSG}
                    </p>
                    <p className={styles.level}>
                        {isOnValues<Level>(data?.level, LEVELS) ||
                            LEVEL_DEFAULT_MSG}
                    </p>
                </div>
                {action && (
                    <div className={styles.actionsPrice}>
                        <PurchaseAction
                            canBuy={isNumber(data?.price)}
                            courseID={asNumber(courseID)}
                            isObtained={asBoolean(data?.isObtained)}
                            disabled={!canNavigate}
                        />
                        <p className={styles.price}>
                            {isNumber(data?.price)
                                ? `${data.price}$`
                                : PRICE_DEFAULT_MSG}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemCourseDisplay;
