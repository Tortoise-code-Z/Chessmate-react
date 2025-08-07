import CantBuyModal from "../../components/CantBuyModal";
import CoursesRecomended from "../../components/CoursesRecomended";
import { useCantBuyStore } from "../../hooks/useCantBuyStore";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import CourseCommentSection from "./CourseCommentSection";
import CourseDataSection from "./CourseDataSection";

type Props = {};

function CoursesDetail({}: Props) {
    const { user } = useUserAuthStore();
    const { cantBuy } = useCantBuyStore();

    return (
        <>
            {cantBuy && <CantBuyModal />}

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
                titleDisplay={"Col"}
                titleAlign={"center"}
                limit={4}
                userID={user?.userID}
            />
        </>
    );
}

export default CoursesDetail;
