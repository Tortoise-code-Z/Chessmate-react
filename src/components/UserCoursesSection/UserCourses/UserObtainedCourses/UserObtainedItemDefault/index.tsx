import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
    DEFAULT_COURSE_IMAGE,
    DEFAULT_COURSE_URL_PATH,
} from "../../../../../consts/images";
import { getImageSize } from "../../../../../utils/images";
import FigureImage from "../../../../FigureImage";
import styles from "./UserObtainedItemDefault.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { PATHS } from "../../../../../consts/paths";
import { CourseJSON, Progress } from "../../../../../types/types";
import { isString } from "../../../../../utils/general";

type Props = {
    data: CourseJSON & Progress;
};

/**
 * UserObtainedItemDefault - React component that displays a fallback/default course item when course data cannot be retrieved.
 *
 * Features:
 * - Shows a default course image using `FigureImage` with predefined source, alt text, and dimensions.
 * - Displays messages indicating data retrieval failure and suggests contacting support.
 * - Optionally shows the course title if available.
 * - Provides a `NavLink` button to navigate to the contact page, including an email icon (`MdOutlineEmail`).
 * - Styled with CSS modules for consistent layout and user-friendly appearance.
 *
 * Props:
 * - `data`: Object containing course information and user's progress (`CourseJSON & Progress`), used minimally for title display.
 *
 * @returns JSX.Element: A non-clickable fallback course card with default image, messages, and contact link.
 */

function UserObtainedItemDefault({ data }: Props) {
    const { t } = useTranslation("dashboard");
    return (
        <div className={styles.userObtainedCoursesItemDefault}>
            <div className={styles.container}>
                <FigureImage
                    src={DEFAULT_COURSE_IMAGE.image}
                    alt={DEFAULT_COURSE_IMAGE.alt}
                    title={DEFAULT_COURSE_IMAGE.alt}
                    width={getImageSize(DEFAULT_COURSE_URL_PATH, "width")}
                    height={getImageSize(DEFAULT_COURSE_URL_PATH, "height")}
                />
            </div>
            <p className={styles.notData}>{t("itemDefault.notData")}</p>
            <p className={styles.contactText}>{t("itemDefault.contact")}</p>

            {isString(data?.title) && (
                <p className={styles.dataCourse}>
                    {t("itemDefault.titleLabel")}: {data.title}
                </p>
            )}
            <NavLink
                className={["button", "buttonTerciary"].join(" ")}
                to={PATHS.contact}
            >
                <MdOutlineEmail />
                {t("common:nav.contact")}
            </NavLink>
        </div>
    );
}

export default UserObtainedItemDefault;
