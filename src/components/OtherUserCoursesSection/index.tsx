import { useParams } from "react-router-dom";
import UserCourses from "../UserCourses";
import styles from "./OtherUserCoursesSection.module.css";

type Props = {};

function OtherUserCoursesSection({}: Props) {
    const params = useParams();
    return (
        <section className={[styles.otherUserCoursesSection].join(" ")}>
            <h2>
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    Otros
                </span>{" "}
                de mis cursos
            </h2>
            <UserCourses
                obtainedCoursesLimit={3}
                defaultCourseClassID={Number(params.id)}
            />
        </section>
    );
}

export default OtherUserCoursesSection;
