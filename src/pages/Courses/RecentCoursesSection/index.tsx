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
 * RecentCoursesSection - React component that displays a section of recently added courses.
 *
 * Features:
 * - Fetches recent courses using `useRecentCourses`, optionally including user-specific data if logged in.
 * - Handles loading and error states with `DataStateWrapper`.
 * - Renders courses using `CoursesDisplay` in a row layout.
 * - Adds decorative visuals with `LightComponent`.
 * - Animated entry of the section using `AnimatedInView`.
 * - Styled with CSS modules for consistent layout and spacing.
 *
 * Props:
 * - No props are required for this component.
 *
 * @returns JSX.Element: A section displaying recently added courses with visual enhancements and responsive layout.
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
