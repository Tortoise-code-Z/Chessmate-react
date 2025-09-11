import { useParams } from "react-router-dom";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { PATHS } from "../../../consts/paths";
import CourseClassroomBanner from "./CourseClassroomBanner";
import CourseClassroomContent from "./CourseClassroomContent";
import styles from "./ObtainedCourseDataSection.module.css";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import useCourseClassroom from "../../../hooks/useCourseClassroom";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";

type Props = {};

/**
 * ObtainedCourseDataSection component that renders the data section for a specific obtained course.
 *
 * Features:
 * - DataStateWrapper handling loading and error states when fetching course data.
 * - CourseClassroomBanner displaying key information about the course.
 * - CourseClassroomContent displaying detailed course content.
 *
 * Hooks:
 * - useParams: Retrieves the course ID from the route parameters.
 * - useUserAuthStore: Provides the currently authenticated user's data.
 * - useCourseClassroom: Fetches the classroom data for the specified course and user.
 *
 * @returns JSX element rendering the obtained course data section with loading and error handling.
 */

function ObtainedCourseDataSection({}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();
    let { data, isLoading, error } = useCourseClassroom(
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
                paddingErrorLateral={true}
                paddingErrorNavbar={true}
            >
                <CourseClassroomBanner data={data} />
                <CourseClassroomContent data={data} />
            </DataStateWrapper>
        </section>
    );
}

export default ObtainedCourseDataSection;
