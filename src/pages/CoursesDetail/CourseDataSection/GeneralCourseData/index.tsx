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
                                to={`/${PATHS.obtainedCourseClassroom.replace(
                                    ":id",
                                    data.curseID.toString()
                                )}`}
                            >
                                <FaBookReader />
                                Ir al curso
                            </NavLink>
                        )}
                        <PurchaseAction
                            canBuy={isNumber(data?.price)}
                            courseID={asNumber(data?.curseID)}
                            isObtained={asBoolean(data?.isObtained)}
                        />
                    </div>
                </div>
            </div>
        </AnimatedInView>
    );
}

export default GeneralCourseData;
