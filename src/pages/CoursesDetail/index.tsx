import CoursesRecomended from "../../components/CoursesRecomended";
import { useCantBuyStore } from "../../hooks/useCantBuyStore";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import CourseCommentSection from "./CourseCommentSection";
import CourseDataSection from "./CourseDataSection";
import CantDoAction from "../../components/CantDoAction";
import { useCantCommentStore } from "../../hooks/useCantCommentStore";

type Props = {};

function CoursesDetail({}: Props) {
    const { user } = useUserAuthStore();
    const { cantDo: cantBuy, setState: setCantBuyState } = useCantBuyStore();
    const { cantDo: cantComment, setState: setCantCommentState } =
        useCantCommentStore();

    return (
        <>
            {(cantBuy || cantComment) && (
                <CantDoAction
                    setState={cantBuy ? setCantBuyState : setCantCommentState}
                    action={cantBuy ? "buy" : "comment"}
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
