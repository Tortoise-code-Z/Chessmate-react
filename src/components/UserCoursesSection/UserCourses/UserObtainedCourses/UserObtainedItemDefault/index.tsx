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
import { DEFAULT_COURSES_VALUES } from "../../../../../consts/general";

type Props = {
    data: CourseJSON & Progress;
};

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

            <p className={styles.dataCourse}>
                Título: {data?.title || DEFAULT_COURSES_VALUES.title}
            </p>

            <NavLink
                className={["button", "buttonTerciary"].join(" ")}
                to={`/${PATHS.contact}`}
            >
                <MdOutlineEmail />
                Contacto
            </NavLink>
        </div>
    );
}

export default UserObtainedItemDefault;
