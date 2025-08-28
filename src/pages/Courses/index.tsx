import AllCoursesSection from "./AllCoursesSection";
import BestSellersSection from "../../components/BestSellersSection";
import CourseBanner from "./CourseBanner";
import RecentCoursesSection from "./RecentCoursesSection";
import FeedbackMessage from "../../components/FeedbackMessage";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";

type Props = {};

function Courses({}: Props) {
    const { state } = useProfessorMsgStore();

    return (
        <>
            {state && <ProfessorFixedMessage />}
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
