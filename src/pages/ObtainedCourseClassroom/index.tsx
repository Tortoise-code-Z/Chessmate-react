import { useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ObtainedCourseDataSection from "./ObtainedCourseDataSection";
import TitleHx from "../../components/TitleHx";
import CourseCommentSection from "../../components/CourseCommentSection";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import FeedbackMessage from "../../components/FeedbackMessage";

type Props = {};

/**
 * ObtainedCourseClassroom component that renders the classroom view for a specific obtained course.
 *
 * Features:
 * - ProfessorFixedMessage component displayed at the top to advert if an action is not posible.
 * - FeedbackMessage component for user feedback interactions.
 * - ObtainedCourseDataSection showing detailed information about the obtained course.
 * - CourseCommentSection for user comments on the course.
 * - UserCoursesSection displaying other courses of the user, limited to 3 and showing a custom message when no additional courses exist.
 * - TitleHx used to render a section title with custom styling inside UserCoursesSection.
 *
 * Hooks:
 * - useParams: Retrieves the course ID from the route parameters.
 *
 * @returns JSX element rendering the complete obtained course classroom view.
 */

function ObtainedCourseClassroom({}: Props) {
    const params = useParams();

    return (
        <>
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
