import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CourseJSON, Progress } from "../../../../../types/types";
import { paths } from "../../../../../consts/paths";

import styles from "./CourseTitleAndDetail.module.css";
import Button from "../../../../Button";

type Props = {
    data: CourseJSON & Progress;
};

function CourseTitleAndDetail({ data }: Props) {
    const navigate = useNavigate();
    return (
        <div className={[styles.container].join(" ")}>
            <p className={[styles.title].join(" ")}>{data.title}</p>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    navigate(
                        `/${paths.coursesDetail.replace(
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
