import UserCourses from "../../../components/UserCourses";
import styles from "./ObtainedCoursesSection.module.css";

type Props = {};

function ObtainedCoursesSection({}: Props) {
    return (
        <section className={[styles.obtainedCoursesSection].join(" ")}>
            <h2>
                Mis <span className={["span-pr-color"].join(" ")}>cursos</span>
            </h2>
            <UserCourses />
        </section>
    );
}

export default ObtainedCoursesSection;
