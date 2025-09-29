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
 * CourseDataSection - React component that displays detailed information for a specific course.
 *
 * Features:
 * - Fetches course data using `useCourse`, optionally including user-specific information if logged in.
 * - Handles loading and error states with `DataStateWrapper`.
 * - Renders course navigation breadcrumbs using `BreadCrumb`.
 * - Displays general course information with `GeneralCourseData`.
 * - Shows course authors via `AuthorsSection`.
 * - Renders the course description with `CourseDescription`.
 * - Displays detailed course content and learning objectives using `DetailsCourse` components.
 * - Adds decorative visuals with `LightComponent` for styling and layout enhancement.
 * - Safely handles missing or undefined data using utility functions like `asObject`.
 *
 * Props:
 * - No props are required for this component.
 *
 * @returns JSX.Element: A section containing full course details, including authors, description, and content/learning objectives.
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
