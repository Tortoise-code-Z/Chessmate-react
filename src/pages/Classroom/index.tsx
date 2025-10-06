import { useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ClassZoneSection from "./ClassZoneSection";
import TitleHx from "../../components/TitleHx";
import FeedbackMessage from "../../components/FeedbackMessage";
import FeedbackListener from "../../components/FeedbackListener";
import ProfessorListener from "../../components/ProfessorListenner";

type Props = {};

/**
 * Classroom - React component representing a user's classroom page.
 *
 * Features:
 * - Displays a `ClassZoneSection` for the main classroom content.
 * - Shows a limited list of the user's other courses via `UserCoursesSection`.
 * - Includes `FeedbackListener` and `FeedbackMessage` to handle and display user feedback dynamically.
 * - Uses `TitleHx` for section headings with styled spans for emphasis.
 * - Retrieves route parameters using `useParams` for dynamic content rendering.
 *
 * Props:
 * - No props are required for this component.
 *
 * @returns JSX.Element: The classroom page containing course sections and feedback components.
 */

function Classroom({}: Props) {
    const params = useParams();

    return (
        <>
            <FeedbackListener />
            <ProfessorListener />

            <FeedbackMessage />

            <ClassZoneSection />
            <UserCoursesSection
                obtainedCoursesLimit={3}
                defaultCourseClassID={Number(params.id)}
            >
                <TitleHx level={2}>
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        Otros
                    </span>{" "}
                    de mis cursos
                </TitleHx>
            </UserCoursesSection>
        </>
    );
}

export default Classroom;
