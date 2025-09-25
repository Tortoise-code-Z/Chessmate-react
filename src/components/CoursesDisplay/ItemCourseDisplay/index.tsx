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
    isOnVaulues,
} from "../../../utils/general";

type Props = {
    action?: boolean;
    data: CourseJSON & IsObtainedCourse;
    display?: "Row" | "Col";
    courseID: number | undefined;
    canNavigate?: boolean;
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
                `/${PATHS.coursesDetail.replace(
                    ":id",
                    data.curseID.toString()
                )}`
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
                        {isOnVaulues<Level>(data?.level, LEVELS) ||
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
