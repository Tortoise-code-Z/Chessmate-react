import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CourseJSON, Progress } from "../../../../../types/types";
import { paths } from "../../../../../consts/paths";

import styles from "./CourseTitleAndDetail.module.css";

type Props = {
    data: CourseJSON & Progress;
};

function CourseTitleAndDetail({ data }: Props) {
    return (
        <div className={[styles.container].join(" ")}>
            <p className={[styles.title].join(" ")}>{data.title}</p>
            <Link
                className={["button", "buttonPrimary", "fit-content"].join(" ")}
                to={`/${paths.coursesDetail.replace(
                    ":id",
                    data.curseID.toString()
                )}`}
                title="Ver detalles"
            >
                <FaInfoCircle />
                Ver detalles
            </Link>
        </div>
    );
}

export default CourseTitleAndDetail;
