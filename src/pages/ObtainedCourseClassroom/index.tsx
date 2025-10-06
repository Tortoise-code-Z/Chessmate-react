import { useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ObtainedCourseDataSection from "./ObtainedCourseDataSection";
import TitleHx from "../../components/TitleHx";
import CourseCommentSection from "../../components/CourseCommentSection";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import FeedbackMessage from "../../components/FeedbackMessage";
import FeedbackListener from "../../components/FeedbackListener";
import ProfessorListener from "../../components/ProfessorListenner";
import { Helmet } from "react-helmet-async";

type Props = {};

/**
 * ObtainedCourseClassroom - React component that renders the classroom view for a course
 * that the user has obtained.
 *
 * Features:
 * - Displays feedback listener and messages for user interactions.
 * - Shows a fixed message from the professor.
 * - Renders `ObtainedCourseDataSection` to display course details.
 * - Includes `CourseCommentSection` for user comments on the course.
 * - Shows additional user courses via `UserCoursesSection`, limited to 3 and excluding default courses.
 * - Retrieves the course ID from URL parameters (`useParams`) to filter obtained courses.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A classroom interface for an obtained course with course details, comments, and additional courses.
 */

function ObtainedCourseClassroom({}: Props) {
    const params = useParams();

    return (
        <>
            <Helmet>
                <title>Chessmate - Clase</title>
            </Helmet>
            <FeedbackListener />
            <ProfessorListener />

            <ProfessorFixedMessage />
            <FeedbackMessage />

            <ObtainedCourseDataSection />
            <CourseCommentSection />

            <UserCoursesSection
                obtainedCoursesLimit={3}
                showDefaultCourses={false}
                obtainedCourseClassID={Number(params.id)}
                msg="Parece que no tienes más cursos..."
            >
                <TitleHx level={2}>
                    <span className={["upperCase", "span-pr-color"].join(" ")}>
                        otros
                    </span>{" "}
                    de mis cursos
                </TitleHx>
            </UserCoursesSection>
        </>
    );
}

export default ObtainedCourseClassroom;
