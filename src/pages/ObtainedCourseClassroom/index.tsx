import { useParams } from "react-router-dom";
import AboutAuthor from "./AboutAuthor";
import CourseClassroomBanner from "./CourseClassroomBanner";
import DescriptionCourseSection from "./DescriptionCourseSection";
import styles from "./ObtaindeCourseClassroom.module.css";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useCourse from "../../hooks/useCourse";
import { Course, IsObtainedCourse } from "../../types/types";
import DataStateWrapper from "../../components/DataStateWrapperProps";
import UserCoursesSection from "../../components/UserCoursesSection";

type Props = {};

function ObtaindeCourseClassroom({}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useCourse(
        DATABASE_KEY,
        Number(params.id),
        user?.userID
    );

    return (
        <section className={styles.obtaindeCourseClassroom}>
            <DataStateWrapper isLoading={isLoading} error={error}>
                <CourseClassroomBanner />
                <DescriptionCourseSection
                    data={data ?? ({} as Course & IsObtainedCourse)}
                />
                {/* <CourseContent /> */}
                <AboutAuthor data={data ?? ({} as Course & IsObtainedCourse)} />
                <UserCoursesSection
                    obtainedCoursesLimit={3}
                    showDefaultCourses={false}
                >
                    <>
                        <h2>
                            <span
                                className={["upperCase", "span-pr-color"].join(
                                    " "
                                )}
                            >
                                otros
                            </span>{" "}
                            de mis cursos
                        </h2>
                    </>
                </UserCoursesSection>
            </DataStateWrapper>
        </section>
    );
}

export default ObtaindeCourseClassroom;
