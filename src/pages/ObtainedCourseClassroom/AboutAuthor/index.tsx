import { Course, IsObtainedCourse } from "../../../types/types";
import Authors from "../../CoursesDetail/CourseDataSection/AuthorsSection/Authors";
import styles from "./AboutAuthor.module.css";

type Props = {
    data: Course & IsObtainedCourse;
};

function AboutAuthor({ data }: Props) {
    return (
        <section className={styles.aboutAuthor}>
            <h2>
                <span className={["upperCase", "span-pr-color"].join(" ")}>
                    sobre
                </span>{" "}
                los autores
            </h2>
            <Authors data={data} />
        </section>
    );
}

export default AboutAuthor;
