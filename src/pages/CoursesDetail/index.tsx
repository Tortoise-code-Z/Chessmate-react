import CoursesRecomended from "../../components/CoursesRecomended";
import { useCantBuyStore } from "../../hooks/useCantBuyStore";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import CourseCommentSection from "./CourseCommentSection";
import CourseDataSection from "./CourseDataSection";
import CantDoAction from "../../components/CantDoAction";
import { useCantCommentStore } from "../../hooks/useCantCommentStore";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import FeedbackMessage from "../../components/FeedbackMessage";

type Props = {};

function CoursesDetail({}: Props) {
    const { user } = useUserAuthStore();
    const { cantDo: cantBuy, setState: setCantBuyState } = useCantBuyStore();
    const {
        cantDo: cantComment,
        setState: setCantCommentState,
        value,
    } = useCantCommentStore();

    const {
        state: feedBackState,
        msg,
        setState: setFeedbackState,
        type,
    } = useFeedbackMessageStore();

    return (
        <>
            {(cantBuy || cantComment) && (
                <CantDoAction
                    setState={cantBuy ? setCantBuyState : setCantCommentState}
                    action={cantBuy ? "buy" : value}
                />
            )}
            {feedBackState && (
                <FeedbackMessage
                    onClose={() => setFeedbackState(false)}
                    msg={msg}
                    type={type}
                />
            )}

            <CourseDataSection />
            <CourseCommentSection />
            <CoursesRecomended
                titleContain={
                    <>
                        Tambien te puede{" "}
                        <span
                            className={["span-pr-color", "upperCase"].join(" ")}
                        >
                            Interesar
                        </span>
                    </>
                }
                titleDisplay={"Row"}
                titleAlign={"start"}
                limit={4}
                userID={user?.userID}
            />
        </>
    );
}

export default CoursesDetail;
