import { Course } from "../../../../types/types";
import styles from "./CourseDescription.module.css";

type Props = {
    data: Course;
};

function CourseDescription({ data }: Props) {
    return (
        <div className={[styles].join(" ")}>
            <h3>Descripción</h3>
            <p>{data.detailDescription}</p>
        </div>
    );
}

export default CourseDescription;
