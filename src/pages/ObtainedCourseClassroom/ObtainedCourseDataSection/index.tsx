import { useParams } from "react-router-dom";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { PATHS } from "../../../consts/paths";
import CourseClassroomBanner from "./CourseClassroomBanner";
import CourseClassroomContent from "./CourseClassroomContent";
import styles from "./ObtainedCourseDataSection.module.css";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import useCourseClassroom, {
    useCourseClassroomApi,
} from "../../../hooks/useCourseClassroom";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import { asNumber, asObject } from "../../../utils/general";

type Props = {};

/**
 * ObtainedCourseDataSection - React component that renders the data section for an obtained course
 * in the classroom view.
 *
 * Features:
 * - Fetches course classroom data using `useCourseClassroom` hook with user ID and course ID from URL params.
 * - Wraps the content in `DataStateWrapper` to handle loading and error states gracefully.
 * - Displays `CourseClassroomBanner` for course overview and `CourseClassroomContent` for detailed content.
 * - Provides a link to navigate back to the dashboard in case of error.
 * - Ensures safe handling of potentially undefined or null data using `asObject` utility.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A section displaying the obtained course's classroom data with loading and error handling.
 */

function ObtainedCourseDataSection({}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

    let { data, isLoading, error } = useCourseClassroom(
        DATABASE_KEY,
        asNumber(Number(params?.id)),
        asNumber(user?.userID)
    );

    const safeData = asObject<useCourseClassroomApi>(data);

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
                <CourseClassroomBanner data={safeData} />
                <CourseClassroomContent data={safeData} />
            </DataStateWrapper>
        </section>
    );
}

export default ObtainedCourseDataSection;
