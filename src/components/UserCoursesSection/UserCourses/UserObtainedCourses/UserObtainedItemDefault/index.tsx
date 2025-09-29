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
            <p className={styles.notData}>
                No se ha podido recuperar los datos de este curso.
            </p>
            <p className={styles.contactText}>
                Contacte con nuestro servicio técnico para más información.
            </p>

            {isString(data?.title) && (
                <p className={styles.dataCourse}>Título: {data.title}</p>
            )}
            <NavLink
                className={["button", "buttonTerciary"].join(" ")}
                to={PATHS.contact}
            >
                <MdOutlineEmail />
                Contacto
            </NavLink>
        </div>
    );
}

export default UserObtainedItemDefault;
