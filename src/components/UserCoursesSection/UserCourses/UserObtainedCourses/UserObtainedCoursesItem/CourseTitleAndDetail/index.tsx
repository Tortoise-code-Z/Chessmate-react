import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import styles from "./CourseTitleAndDetail.module.css";
import { CourseJSON, Progress } from "../../../../../../types/types";
import TitleHx from "../../../../../TitleHx";
import Button from "../../../../../Button";
import { PATHS } from "../../../../../../consts/paths";

type Props = {
    data: CourseJSON & Progress;
};

function CourseTitleAndDetail({ data }: Props) {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <TitleHx level={4} classNames={[styles.title]}>
                {data.title}
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
