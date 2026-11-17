import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PurchaseAction from "../../../../components/PurchaseAction";
import { PATHS } from "../../../../consts/paths";
import { CourseJSON, IsObtainedCourse, Level } from "../../../../types/types";
import styles from "./BannerCard.module.css";
import TitleHx from "../../../../components/TitleHx";
import { LEVELS } from "../../../../consts/general";
import {
    asBoolean,
    asNumber,
    asString,
    isNumber,
    isOnValues,
} from "../../../../utils/general";
import { AnimatedInView } from "../../../../components/AnimatedInView";

type Props = {
    data: (CourseJSON & IsObtainedCourse) | undefined;
};

/**
 * BannerCard - React component that displays detailed information for a featured course in the banner.
 *
 * Features:
 * - Shows course title, short description, level, and price with safe fallbacks for missing data.
 * - Navigates to the course detail page when the card is clicked.
 * - Includes a `PurchaseAction` component to handle course purchase or display ownership status.
 * - Uses `AnimatedInView` for smooth entry animation of the card.
 * - Safely handles undefined or missing data using utility functions like `asString`, `asNumber`, `asBoolean`, and `isOnValues`.
 * - Styled with CSS modules for layout, typography, and responsive design.
 *
 * Props:
 * - `data`: Featured course data (`CourseJSON & IsObtainedCourse | undefined`) to display.
 *
 * @returns JSX.Element: A clickable course card with information and purchase options for the banner.
 */

function BannerCard({ data }: Props) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const level = isOnValues<Level>(data?.level, LEVELS);
    const bannerCardHandleClick = () => {
        if (isNumber(data?.courseID))
            navigate(
                PATHS.coursesDetail.replace(":id", data.courseID.toString())
            );
    };

    return (
        <AnimatedInView>
            <div
                className={[styles.bannerCard].join(" ")}
                onClick={() => bannerCardHandleClick()}
            >
                <div className={styles.courseData}>
                    <TitleHx level={1}>
                        {asString(data?.title) || t("common:defaults.title")}
                    </TitleHx>
                    <p className={styles.description}>
                        {asString(data?.shortDescription) ||
                            t("common:defaults.description")}
                    </p>
                    <span
                        className={[
                            "span-pr-color",
                            "text-medium",
                            styles.level,
                        ].join(" ")}
                    >
                        {level ? t(`levels.${level}`) : t("common:defaults.level")}
                    </span>
                    <p className={styles.price}>
                        {isNumber(data?.price)
                            ? `${data.price}$`
                            : t("common:defaults.price")}
                    </p>
                </div>

                <PurchaseAction
                    courseID={asNumber(data?.courseID)}
                    canBuy={isNumber(data?.price) && isNumber(data?.courseID)}
                    isObtained={asBoolean(data?.isObtained)}
                />
            </div>
        </AnimatedInView>
    );
}

export default BannerCard;
