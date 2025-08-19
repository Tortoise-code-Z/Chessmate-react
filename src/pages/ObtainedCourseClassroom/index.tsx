import { useParams } from "react-router-dom";
import OtherUserCoursesSection from "../Classroom/OtherUserCoursesSection";
import AboutAuthor from "./AboutAuthor";
import CourseClassroomBanner from "./CourseClassroomBanner";
import DescriptionCourseSection from "./DescriptionCourseSection";
import styles from "./ObtaindeCourseClassroom.module.css";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useCourse from "../../hooks/useCourse";
import { Course, IsObtainedCourse } from "../../types/types";
import DataStateWrapper from "../../components/DataStateWrapperProps";

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
                <OtherUserCoursesSection />
            </DataStateWrapper>
        </section>
    );
}

export default ObtaindeCourseClassroom;
