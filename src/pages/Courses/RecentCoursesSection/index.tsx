import CoursesDisplay from "../../../components/CoursesDisplay";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import LightComponent from "../../../components/LightComponent";
import { JSON_URL } from "../../../consts/url";
import useRecentCourses from "../../../hooks/useRecentCourses";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { CourseJSON } from "../../../types/types";
import styles from "./RecentCoursesSection.module.css";

type Props = {};

function RecentCoursesSection({}: Props) {
    const { user } = useUserAuthStore();
    const { data, isLoading, error } = useRecentCourses(JSON_URL, user?.userID);

    return (
        <section className={[styles.recentCoursesSection].join(" ")}>
            <LightComponent top={20} right={75} />

            <h2>
                Recién{" "}
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    llegados
                </span>
            </h2>
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
