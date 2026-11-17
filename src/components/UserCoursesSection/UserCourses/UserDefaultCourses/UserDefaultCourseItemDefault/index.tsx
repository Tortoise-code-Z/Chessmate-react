import { useTranslation } from "react-i18next";
import styles from "./UserDefaultCourseItemDefault.module.css";
import UserProgress from "../UserProgress";
import { DefualtCourse, Progress } from "../../../../../types/types";
import TitleHx from "../../../../TitleHx";
import FigureImage from "../../../../FigureImage";
import { getImage, getImageSize } from "../../../../../utils/images";
import { DEFAULT_DEFAULT_COURSE_IMAGE } from "../../../../../consts/images";
import { asString } from "../../../../../utils/general";

type Props = {
    data: DefualtCourse & Progress;
};

/**
 * UserDefaultCourseItemDefault - React component that displays a default/free course in a disabled state.
 *
 * Features:
 * - Shows course progress using `UserProgress`.
 * - Displays the course image with a fallback default image via `FigureImage`.
 * - Shows the course title using `TitleHx`.
 * - Marks the course as "Desactivado" to indicate it is not currently active or accessible.
 * - Safely handles missing or undefined data with utility functions and constants.
 *
 * Props:
 * - `data`: Object containing course information and user's progress (`DefualtCourse & Progress`).
 *
 * @returns JSX.Element: A non-clickable course card showing progress, image, title, and a disabled overlay.
 */

function UserDefaultCourseItemDefault({ data }: Props) {
    const { t } = useTranslation("dashboard");
    return (
        <>
            <div className={styles.userDefaultCourseItem}>
                <UserProgress data={data} />
                <FigureImage
                    otherImage={DEFAULT_DEFAULT_COURSE_IMAGE}
                    src={getImage(data?.imageUrl?.general, ["defaultCourses"])}
                    alt={asString(data?.title) || t("common:defaults.pieceTitle")}
                    title={asString(data?.title) || t("common:defaults.pieceTitle")}
                    width={getImageSize(data?.imageUrl?.general, "height")}
                    height={getImageSize(data?.imageUrl?.general, "height")}
                />
                <div className={styles.desactivate}>{t("defaultCourses.disabled")}</div>
                <TitleHx classNames={[styles.title]} level={4}>
                    {asString(data?.title) || t("common:defaults.pieceTitle")}
                </TitleHx>
            </div>
        </>
    );
}

export default UserDefaultCourseItemDefault;
