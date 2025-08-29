import AllCoursesSection from "./AllCoursesSection";
import BestSellersSection from "../../components/BestSellersSection";
import CourseBanner from "./CourseBanner";
import RecentCoursesSection from "./RecentCoursesSection";
import FeedbackMessage from "../../components/FeedbackMessage";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";

type Props = {};

/**
 * Courses page component that renders all course-related sections.
 *
 * - `ProfessorFixedMessage`: Displays a fixed message from the professor.
 * - `FeedbackMessage`: Shows global feedback messages.
 * - `CourseBanner`: Banner highlighting a course or promotion.
 * - `RecentCoursesSection`: Displays the most recently added courses.
 * - `BestSellersSection`: Displays the top-selling courses with configurable layout and limit.
 * - `AllCoursesSection`: Displays the complete list of courses.
 *
 * Props: none
 *
 * @returns JSX element containing the full courses page.
 */

function Courses({}: Props) {
    return (
        <>
            <ProfessorFixedMessage />
            <FeedbackMessage />

            <CourseBanner />
            <RecentCoursesSection />
            <BestSellersSection
                limit={4}
                display="Col"
                titleText="Más"
                titleTextSpan="vendidos"
                titleDisplay="Row"
                classNames={["pt-50"]}
            />
            <AllCoursesSection />
        </>
    );
}

export default Courses;
