import { useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ClassZoneSection from "./ClassZoneSection";
import TitleHx from "../../components/TitleHx";
import FeedbackMessage from "../../components/FeedbackMessage";

type Props = {};

/**
 * Classroom page component displaying the class zone and user's courses.
 *
 * - Retrieves the `id` parameter from the URL using `useParams`.
 * - Displays a global `FeedbackMessage` component.
 * - Renders the `ClassZoneSection` for the current class content.
 * - Renders `UserCoursesSection` showing up to 3 obtained courses, highlighting other courses.
 *
 * @returns JSX element representing the Classroom page.
 */

function Classroom({}: Props) {
    const params = useParams();

    return (
        <>
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
