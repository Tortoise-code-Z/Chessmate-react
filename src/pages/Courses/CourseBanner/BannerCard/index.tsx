import { useNavigate } from "react-router-dom";
import PurchaseAction from "../../../../components/PurchaseAction";
import { PATHS } from "../../../../consts/paths";
import { CourseJSON, IsObtainedCourse, Level } from "../../../../types/types";
import styles from "./BannerCard.module.css";
import TitleHx from "../../../../components/TitleHx";
import { DEFAULT_COURSES_VALUES, LEVELS } from "../../../../consts/general";
import {
    asBoolean,
    asNumber,
    asString,
    isNumber,
    isOnVaulues,
} from "../../../../utils/general";

type Props = {
    data: (CourseJSON & IsObtainedCourse) | undefined;
};

/**
 * BannerCard component
 *
 * Displays an individual course card for the banner section.
 * Clicking anywhere on the card navigates to the course details page.
 * Includes course title, short description, level, price, and purchase action.
 *
 * Props:
 * - data: CourseJSON & IsObtainedCourse — contains course information and whether the user has obtained it.
 *
 * @returns JSX element for the course banner card.
 */

function BannerCard({ data }: Props) {
    console.log("data?.isObtained", data?.isObtained);
    const navigate = useNavigate();
    const bannerCardHandleClick = () => {
        navigate(
            `/${PATHS.coursesDetail.replace(
                ":id",
                data ? data?.curseID?.toString() : ""
            )}`
        );
    };

    return (
        <div
            className={[styles.bannerCard].join(" ")}
            onClick={() => bannerCardHandleClick()}
        >
            <div className={styles.courseData}>
                <TitleHx level={1}>
                    {asString(data?.title) || DEFAULT_COURSES_VALUES.title}
                </TitleHx>
                <p className={styles.description}>
                    {asString(data?.shortDescription) ||
                        DEFAULT_COURSES_VALUES.shortDescription}
                </p>
                <span
                    className={[
                        "span-pr-color",
                        "text-medium",
                        styles.level,
                    ].join(" ")}
                >
                    {isOnVaulues<Level>(data?.level, LEVELS) ||
                        DEFAULT_COURSES_VALUES.level}
                </span>
                <p className={styles.price}>
                    {isNumber(data?.price)
                        ? `${data.price}$`
                        : DEFAULT_COURSES_VALUES.price}
                </p>
            </div>

            <PurchaseAction
                courseID={asNumber(data?.curseID)}
                canBuy={isNumber(data?.price) && isNumber(data?.curseID)}
                isObtained={asBoolean(data?.isObtained)}
            />
        </div>
    );
}

export default BannerCard;
