import AllCoursesSection from "./AllCoursesSection";
import BestSellersSection from "../../components/BestSellersSection";
import CourseBanner from "./CourseBanner";
import RecentCoursesSection from "./RecentCoursesSection";
import { useCantBuyStore } from "../../hooks/useCantBuyStore";
import CantDoAction from "../../components/CantDoAction";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import FeedbackMessage from "../../components/FeedbackMessage";
// import SuccessFixedMsg from "../../components/SuccessFixedMsg";
// import { useSuccessStore } from "../../hooks/useSuccessStore";
// import { useErrorStore } from "../../hooks/useErrorStore";
// import ErrorFixedMsg from "../../components/ErrorElement/ErrorFixedMsg";

type Props = {};

function Courses({}: Props) {
    const { cantDo, setState } = useCantBuyStore();
    const {
        state: feedBackState,
        msg,
        setState: setFeedbackState,
        type,
    } = useFeedbackMessageStore();

    return (
        <>
            {cantDo && <CantDoAction setState={setState} action="buy" />}

            {feedBackState && (
                <FeedbackMessage
                    onClose={() => setFeedbackState(false)}
                    msg={msg}
                    type={type}
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
