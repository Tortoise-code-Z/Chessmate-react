import AllCoursesSection from "./AllCoursesSection";
import BestSellersSection from "../../components/BestSellersSection";
import CourseBanner from "./CourseBanner";
import RecentCoursesSection from "./RecentCoursesSection";
import FeedbackMessage from "../../components/FeedbackMessage";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import FeedbackListener from "../../components/FeedbackListener";

type Props = {};

/**
 * Courses - React component that renders the main courses page with various course sections and feedback components.
 *
 * Features:
 * - Includes `FeedbackListener` and `FeedbackMessage` to handle user feedback dynamically.
 * - Shows a fixed professor message via `ProfessorFixedMessage`.
 * - Displays a promotional or informational banner with `CourseBanner`.
 * - Renders recent courses using `RecentCoursesSection`.
 * - Highlights best-selling courses with `BestSellersSection`, configurable for layout and display limits.
 * - Lists all available courses in `AllCoursesSection`.
 *
 * Props:
 * - No props are required for this component.
 *
 * @returns JSX.Element: The courses page combining banners, course sections, and feedback components.
 */

function Courses({}: Props) {
    return (
        <>
            <FeedbackListener />
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
