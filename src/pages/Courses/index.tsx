import AllCoursesSection from "./AllCoursesSection";
import BestSellersSection from "../../components/BestSellersSection";
import CourseBanner from "./CourseBanner";
import RecentCoursesSection from "./RecentCoursesSection";
import FeedbackMessage from "../../components/FeedbackMessage";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";

type Props = {};

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
