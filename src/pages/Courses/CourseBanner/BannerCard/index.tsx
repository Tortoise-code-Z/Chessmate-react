import { useNavigate } from "react-router-dom";
import PurchaseAction from "../../../../components/PurchaseAction";
import { PATHS } from "../../../../consts/paths";
import { CourseJSON, IsObtainedCourse, Level } from "../../../../types/types";
import styles from "./BannerCard.module.css";
import TitleHx from "../../../../components/TitleHx";
import {
    DESCRIPTION_DEFAULT_MSG,
    LEVEL_DEFAULT_MSG,
    LEVELS,
    PRICE_DEFAULT_MSG,
    TITLE_DEFAULT_MSG,
} from "../../../../consts/general";
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
    const navigate = useNavigate();
    const bannerCardHandleClick = () => {
        if (isNumber(data?.curseID))
            navigate(
                `/${PATHS.coursesDetail.replace(
                    ":id",
                    data.curseID.toString()
                )}`
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
                        {asString(data?.title) || TITLE_DEFAULT_MSG}
                    </TitleHx>
                    <p className={styles.description}>
                        {asString(data?.shortDescription) ||
                            DESCRIPTION_DEFAULT_MSG}
                    </p>
                    <span
                        className={[
                            "span-pr-color",
                            "text-medium",
                            styles.level,
                        ].join(" ")}
                    >
                        {isOnValues<Level>(data?.level, LEVELS) ||
                            LEVEL_DEFAULT_MSG}
                    </span>
                    <p className={styles.price}>
                        {isNumber(data?.price)
                            ? `${data.price}$`
                            : PRICE_DEFAULT_MSG}
                    </p>
                </div>

                <PurchaseAction
                    courseID={asNumber(data?.curseID)}
                    canBuy={isNumber(data?.price) && isNumber(data?.curseID)}
                    isObtained={asBoolean(data?.isObtained)}
                />
            </div>
        </AnimatedInView>
    );
}

export default BannerCard;
