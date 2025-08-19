import { Course, IsObtainedCourse } from "../../../types/types";
import CourseDescription from "../../CoursesDetail/CourseDataSection/CourseDescription";
import DetailsCourse from "../../CoursesDetail/CourseDataSection/DetailsCourse";
import styles from "./DescriptionCourseSection.module.css";

type Props = {
    data: Course & IsObtainedCourse;
};

function DescriptionCourseSection({ data }: Props) {
    return (
        <section className={styles.descriptionCourseSection}>
            <h2>
                <span className={["upperCase", "span-pr-color"].join(" ")}>
                    sobre
                </span>{" "}
                el curso
            </h2>
            <div className={styles.container}>
                <CourseDescription data={data} />
                <DetailsCourse
                    data={data}
                    type={"content"}
                    titleContain={
                        <>
                            <span
                                className={["span-pr-color", "upperCase"].join(
                                    " "
                                )}
                            >
                                contenido
                            </span>{" "}
                            del curso
                        </>
                    }
                />
                <DetailsCourse
                    data={data}
                    type={"learn"}
                    titleContain={
                        <>
                            ¿Qué harás y{" "}
                            <span
                                className={["span-pr-color", "upperCase"].join(
                                    " "
                                )}
                            >
                                aprenderás
                            </span>
                        </>
                    }
                />
            </div>
        </section>
    );
}

export default DescriptionCourseSection;
