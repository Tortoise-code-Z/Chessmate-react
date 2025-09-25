import { AnimatedInView } from "../../../components/AnimatedInView";
import CoursesDisplay from "../../../components/CoursesDisplay";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import LightComponent from "../../../components/LightComponent";
import TitleHx from "../../../components/TitleHx";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import useRecentCourses from "../../../hooks/useRecentCourses";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { CourseJSON, IsObtainedCourse } from "../../../types/types";
import { asArray, asNumber } from "../../../utils/general";
import styles from "./RecentCoursesSection.module.css";

type Props = {};

/**
 * RecentCoursesSection component that displays the most recently added courses.
 *
 * Features:
 * - Light decorative component positioned top-right.
 * - Title highlighting "Recién llegados".
 * - `DataStateWrapper`: Handles loading and error states when fetching recent courses.
 * - `CoursesDisplay`: Displays the recent courses in a row layout when data is available.
 *
 * State: none
 *
 * Hooks:
 * - `useRecentCourses`: Fetches recent courses based on the current user ID.
 * - `useUserAuthStore`: Retrieves the current authenticated user's ID.
 *
 * Props: none
 *
 * @returns JSX element rendering the "Recent Courses" section.
 */

function RecentCoursesSection({}: Props) {
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useRecentCourses(DATABASE_KEY, {
        required: !!user,
        userID: user ? asNumber(user?.userID) : undefined,
    });

    const safeData = asArray<CourseJSON & IsObtainedCourse>(data);

    return (
        <AnimatedInView>
            <section className={styles.recentCoursesSection}>
                <LightComponent top={50} right={80} />

                <TitleHx level={2}>
                    Recién{" "}
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        llegados
                    </span>
                </TitleHx>

                <DataStateWrapper isLoading={isLoading} error={error}>
                    <CoursesDisplay courses={safeData} display="Row" />
                </DataStateWrapper>
            </section>
        </AnimatedInView>
    );
}

export default RecentCoursesSection;
