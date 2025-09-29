import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import styles from "./CourseTitleAndDetail.module.css";
import { CourseJSON, Progress } from "../../../../../../types/types";
import TitleHx from "../../../../../TitleHx";
import Button from "../../../../../Button";
import { PATHS } from "../../../../../../consts/paths";
import { TITLE_DEFAULT_MSG } from "../../../../../../consts/general";
import { asString } from "../../../../../../utils/general";

type Props = {
    data: CourseJSON & Progress;
};

/**
 * CourseTitleAndDetail - React component that displays the title and a details button for a course.
 *
 * Features:
 * - Shows the course title using `TitleHx`, with a fallback default message if the title is missing.
 * - Includes a `Button` with an info icon (`FaInfoCircle`) to navigate to the course detail page.
 * - Prevents default link behavior and stops event propagation on button click.
 * - Styled with CSS modules for proper layout and spacing.
 *
 * Props:
 * - `data`: Object containing course information and user's progress (`CourseJSON & Progress`).
 *
 * @returns JSX.Element: A course title section with a navigable details button.
 */

function CourseTitleAndDetail({ data }: Props) {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <TitleHx level={4} classNames={[styles.title]}>
                {asString(data?.title) || TITLE_DEFAULT_MSG}
            </TitleHx>

            <Button
                onClick={(e) => {
                    e.preventDefault();
                    navigate(
                        PATHS.coursesDetail.replace(
                            ":id",
                            data.courseID.toString()
                        )
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
