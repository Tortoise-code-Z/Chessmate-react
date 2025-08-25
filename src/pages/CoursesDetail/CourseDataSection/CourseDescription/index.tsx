import TitleHx from "../../../../components/TitleHx";
import { Course, TitleLevel } from "../../../../types/types";
import styles from "./CourseDescription.module.css";

type Props = {
    data: Course;
    level?: TitleLevel;
};

function CourseDescription({ data, level }: Props) {
    return (
        <div className={[styles.descriptionSection].join(" ")}>
            <TitleHx level={level}>Descripción</TitleHx>
            <p>{data.detailDescription}</p>
        </div>
    );
}

export default CourseDescription;
