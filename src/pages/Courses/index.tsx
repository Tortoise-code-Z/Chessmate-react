import AllCoursesSection from "./AllCoursesSection";
import BestSellersSection from "../../components/BestSellersSection";
import CourseBanner from "./CourseBanner";
import RecentCoursesSection from "./RecentCoursesSection";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import FeedbackMessage from "../../components/FeedbackMessage";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

type Props = {};

function Courses({}: Props) {
    const { state } = useProfessorMsgStore();

    const {
        state: feedBackState,
        setState: setFeedbackState,
        path,
        setPath,
        reset,
        setReset,
    } = useFeedbackMessageStore();

    const location = useLocation();

    useEffect(() => {
        if (reset) setPath("");
    }, [location.pathname]);

    return (
        <>
            {state && <ProfessorFixedMessage />}

            {feedBackState && path === location.pathname && (
                <FeedbackMessage
                    onClose={() => {
                        setFeedbackState(false);
                        setReset(true);
                    }}
                />
            )}

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
