import AllCoursesSection from "./AllCoursesSection";
import BestSellersSection from "../../components/BestSellersSection";
import CourseBanner from "./CourseBanner";
import RecentCoursesSection from "./RecentCoursesSection";
import CantBuyModal from "../../components/CantBuyModal";
import { useCantBuyStore } from "../../hooks/useCantBuyStore";

type Props = {};

function Courses({}: Props) {
    const { cantBuy } = useCantBuyStore();

    return (
        <>
            {cantBuy && <CantBuyModal />}

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
