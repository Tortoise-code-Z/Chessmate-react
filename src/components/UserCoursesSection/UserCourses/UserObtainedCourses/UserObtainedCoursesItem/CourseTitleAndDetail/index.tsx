import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import styles from "./CourseTitleAndDetail.module.css";
import { CourseJSON, Progress } from "../../../../../../types/types";
import TitleHx from "../../../../../TitleHx";
import Button from "../../../../../Button";
import { PATHS } from "../../../../../../consts/paths";
import { DEFAULT_COURSES_VALUES } from "../../../../../../consts/general";
import { asString } from "../../../../../../utils/general";

type Props = {
    data: CourseJSON & Progress;
};

/**
 * Component displaying a course's title and a button to navigate to its detail page.
 *
 * - Shows the course title using `TitleHx`.
 * - Provides a "Ver detalles" button that navigates to the course details page when clicked.
 *
 * @param data - The course data including title and ID.
 * @returns A container with the course title and a details button.
 */

function CourseTitleAndDetail({ data }: Props) {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <TitleHx level={4} classNames={[styles.title]}>
                {asString(data?.title) || DEFAULT_COURSES_VALUES.title}
            </TitleHx>

            <Button
                onClick={(e) => {
                    e.preventDefault();
                    navigate(
                        `/${PATHS.coursesDetail.replace(
                            ":id",
                            data.curseID.toString()
                        )}`
                    );
                }}
                propagation={false}
            >
                <FaInfoCircle />
                Ver detalles
            </Button>
        </div>
    );
}

export default CourseTitleAndDetail;
