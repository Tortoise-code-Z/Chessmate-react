import { useParams } from "react-router-dom";
import AuthorsSection from "./AuthorsSection";
import styles from "./CourseDataSection.module.css";
import CourseDescription from "./CourseDescription";
import DetailsCourse from "./DetailsCourse";
import GeneralCourseData from "./GeneralCourseData";
import useCourse from "../../../hooks/useCourse";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { Course, IsObtainedCourse } from "../../../types/types";
import LightComponent from "../../../components/LightComponent";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import { asNumber, asObject } from "../../../utils/general";
import BreadCrumb from "./BreadCrumb";

type Props = {};

/**
 * CourseDataSection component that displays detailed information about a specific course.
 *
 * Features:
 * - Light decorative components positioned at top-right.
 * - Breadcrumb navigation linking back to the courses list.
 * - `GeneralCourseData`: Shows main course information.
 * - `AuthorsSection`: Displays course authors.
 * - `CourseDescription`: Displays the course description with a customizable heading level.
 * - `DetailsCourse`: Shows detailed sections for course content and learning outcomes.
 * - `DataStateWrapper`: Handles loading and error states when fetching course data.
 *
 * State: none
 *
 * Hooks:
 * - `useCourse`: Fetches course details based on the course ID and current user.
 * - `useUserAuthStore`: Retrieves the current authenticated user's ID.
 * - `useParams`: Accesses route parameters to get the course ID.
 *
 * Props: none
 *
 * @returns JSX element rendering the complete course data section with all details and authors.
 */

function CourseDataSection({}: Props) {
    const { user } = useUserAuthStore();
    const params = useParams();

    const { data, isLoading, error } = useCourse(
        DATABASE_KEY,
        asNumber(Number(params?.id)),
        { required: !!user, userID: user ? asNumber(user?.userID) : undefined }
    );

    const safeData = asObject<Course & IsObtainedCourse>(data);

    return (
        <section className={styles.courseDataSection}>
            <LightComponent top={40} right={30} />
            <LightComponent top={80} right={80} />

            <DataStateWrapper isLoading={isLoading} error={error}>
                <BreadCrumb
                    breadCrumbs={[
                        {
                            label: "Cursos",
                            link: "courses",
                        },
                        {
                            label: safeData?.title,
                        },
                    ]}
                />
                <GeneralCourseData data={safeData} />
                <AuthorsSection data={safeData} />
                <CourseDescription level={2} data={safeData} />
                <DetailsCourse
                    data={safeData}
                    type={"content"}
                    titleContain={
                        <>
                            <span
                                className={["span-pr-color", "upperCase"].join(
                                    " "
                                )}
                            >
                                contenido
                            </span>{" "}
                            del curso
                        </>
                    }
                />
                <DetailsCourse
                    data={safeData}
                    type={"learn"}
                    titleContain={
                        <>
                            ¿Qué harás y{" "}
                            <span
                                className={["span-pr-color", "upperCase"].join(
                                    " "
                                )}
                            >
                                aprenderás
                            </span>
                            ?
                        </>
                    }
                />
            </DataStateWrapper>
        </section>
    );
}

export default CourseDataSection;
