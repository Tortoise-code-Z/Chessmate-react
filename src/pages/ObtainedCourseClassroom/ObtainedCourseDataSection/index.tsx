import { useParams } from "react-router-dom";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { PATHS } from "../../../consts/paths";
import { Course, IsObtainedCourse } from "../../../types/types";
import CourseClassroomBanner from "./CourseClassroomBanner";
import CourseClassroomContent from "./CourseClassroomContent";
import styles from "./ObtainedCourseDataSection.module.css";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import useCourseClassroom from "../../../hooks/useCourseClassroom";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";

type Props = {};

function ObtainedCourseDataSection({}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useCourseClassroom(
        DATABASE_KEY,
        Number(params.id),
        user?.userID
    );

    return (
        <section className={styles.obtainedCourseDataSection}>
            <DataStateWrapper
                isLoading={isLoading}
                loadingClassName={["paddign-top-navbar-height"]}
                error={error}
                errorMsg={error?.message}
                errorClassName={["paddign-top-navbar-height"]}
                errorLinkAction={{
                    text: "Volver al portal",
                    to: `/${PATHS.dashboard}`,
                }}
            >
                <CourseClassroomBanner
                    data={data ?? ({} as Course & IsObtainedCourse)}
                />
                <CourseClassroomContent
                    data={data ?? ({} as Course & IsObtainedCourse)}
                />
            </DataStateWrapper>
        </section>
    );
}

export default ObtainedCourseDataSection;
