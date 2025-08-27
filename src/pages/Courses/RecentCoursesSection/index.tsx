import CoursesDisplay from "../../../components/CoursesDisplay";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import LightComponent from "../../../components/LightComponent";
import TitleHx from "../../../components/TitleHx";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import useRecentCourses from "../../../hooks/useRecentCourses";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { CourseJSON } from "../../../types/types";
import styles from "./RecentCoursesSection.module.css";

type Props = {};

function RecentCoursesSection({}: Props) {
    const { user } = useUserAuthStore();
    const { data, isLoading, error } = useRecentCourses(
        DATABASE_KEY,
        user?.userID
    );

    return (
        <section className={styles.recentCoursesSection}>
            <LightComponent top={50} right={80} />

            <TitleHx level={2}>
                Recién{" "}
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    llegados
                </span>
            </TitleHx>

            <DataStateWrapper isLoading={isLoading} error={error}>
                <CoursesDisplay
                    courses={data ?? ([] as CourseJSON[])}
                    display="Row"
                />
            </DataStateWrapper>
        </section>
    );
}

export default RecentCoursesSection;
