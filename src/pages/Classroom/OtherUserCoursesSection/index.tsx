import { useParams } from "react-router-dom";
import styles from "./OtherUserCoursesSection.module.css";
import UserCourses from "../../../components/UserCourses";

type Props = {};

function OtherUserCoursesSection({}: Props) {
    const params = useParams();
    return (
        <section className={styles.otherUserCoursesSection}>
            <h2>
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    Otros
                </span>{" "}
                de mis cursos
            </h2>
            <UserCourses
                obtainedCoursesLimit={3}
                defaultCourseClassID={Number(params.id)}
                showObtainedCourses={false}
            />
        </section>
    );
}

export default OtherUserCoursesSection;
