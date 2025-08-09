import AllCoursesSection from "./AllCoursesSection";
import BestSellersSection from "../../components/BestSellersSection";
import CourseBanner from "./CourseBanner";
import RecentCoursesSection from "./RecentCoursesSection";
import { useCantBuyStore } from "../../hooks/useCantBuyStore";
import CantDoAction from "../../components/CantDoAction";
// import SuccessFixedMsg from "../../components/SuccessFixedMsg";
// import { useSuccessStore } from "../../hooks/useSuccessStore";
// import { useErrorStore } from "../../hooks/useErrorStore";
// import ErrorFixedMsg from "../../components/ErrorElement/ErrorFixedMsg";

type Props = {};

function Courses({}: Props) {
    const { cantDo, setState } = useCantBuyStore();

    // const { isSuccess, successMsg } = useSuccessStore();
    // const { isError, errorMsg } = useErrorStore();

    return (
        <>
            {cantDo && <CantDoAction setState={setState} action="buy" />}
            {/* {isSuccess && <SuccessFixedMsg successMsg={successMsg} />} */}
            {/* {isError && <ErrorFixedMsg errorMsg={errorMsg} />} */}
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
