import { Course, IsObtainedCourse, Level } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./GeneralCourseData.module.css";
import PurchaseAction from "../../../../components/PurchaseAction";
import FigureImage from "../../../../components/FigureImage";
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
import { NavLink } from "react-router-dom";
import { PATHS } from "../../../../consts/paths";
import { FaBookReader } from "react-icons/fa";
import { AnimatedInView } from "../../../../components/AnimatedInView";

type Props = {
    data: (Course & IsObtainedCourse) | undefined;
};

/**
 * GeneralCourseData - React component that displays key information about a course,
 * including title, description, level, price, and actions to purchase or access it.
 *
 * Features:
 * - Wraps content in `AnimatedInView` to animate visibility on scroll.
 * - Displays the course image via `FigureImage` with dynamic size and fallback handling.
 * - Shows course title, short description, level, and price with defaults when missing.
 * - Provides an action to access the course (`NavLink`) if already obtained.
 * - Integrates `PurchaseAction` to handle buying logic based on course data.
 * - Safely handles undefined or invalid values using utility functions (`asString`, `asNumber`, `isNumber`, `asBoolean`, `isOnValues`).
 *
 * Props:
 * - `data`: Object containing course information with purchase/obtainment state (`Course & IsObtainedCourse`), or undefined.
 *
 * @returns JSX.Element: A course summary card with image, details, and purchase/access actions.
 */

function GeneralCourseData({ data }: Props) {
    return (
        <AnimatedInView>
            <div className={styles.generalCourseData}>
                <FigureImage
                    src={getImage(data?.imageUrl?.thumb, ["courses"])}
                    alt={asString(data?.title)}
                    title={asString(data?.title)}
                    width={getImageSize(data?.imageUrl?.thumb, "width")}
                    height={getImageSize(data?.imageUrl?.thumb, "height")}
                />

                <div className={styles.dataContainer}>
                    <div className={styles.data}>
                        <TitleHx>
                            {asString(data?.title) || TITLE_DEFAULT_MSG}
                        </TitleHx>
                        <p className={styles.description}>
                            {asString(data?.shortDescription) ||
                                DESCRIPTION_DEFAULT_MSG}
                        </p>
                        <span className={styles.level}>
                            {isOnValues<Level>(data?.level, LEVELS) ||
                                LEVEL_DEFAULT_MSG}
                        </span>
                        <p className={styles.price}>
                            {isNumber(data?.price)
                                ? `${data.price}$`
                                : PRICE_DEFAULT_MSG}
                        </p>
                    </div>
                    <div className={styles.actions}>
                        {data?.isObtained && (
                            <NavLink
                                className={["button", "buttonPrimary"].join(
                                    " "
                                )}
                                to={PATHS.obtainedCourseClassroom.replace(
                                    ":id",
                                    data.courseID.toString()
                                )}
                            >
                                <FaBookReader />
                                Ir al curso
                            </NavLink>
                        )}
                        <PurchaseAction
                            canBuy={isNumber(data?.price)}
                            courseID={asNumber(data?.courseID)}
                            isObtained={asBoolean(data?.isObtained)}
                        />
                    </div>
                </div>
            </div>
        </AnimatedInView>
    );
}

export default GeneralCourseData;
