import WritteMachine from "../../../../../components/WritteMachine";
import { UseCourseApiType } from "../../../../../types/types";
import styles from "./CourseData.module.css";

type Props = {
    index: number;
    data: UseCourseApiType;
};

function CourseData({ data, index }: Props) {
    const description =
        data.courses.content.themes.find((t) => t.id === index)?.description ||
        "";
    return (
        <div className={styles.courseData}>
            <h2>{data.courses.title}</h2>
            <h3>
                {data.courses.content.themes.find((t) => t.id === index)?.title}
            </h3>
            <WritteMachine
                data={description}
                time={30}
                classNames={[styles.description]}
            />
        </div>
    );
}

export default CourseData;
