import AllCoursesSection from "../../components/AllCoursesSection";
import BestSellersSection from "../../components/BestSellersSection";
import CourseBanner from "../../components/CourseBanner";
import RecentCoursesSection from "../../components/RecentCoursesSection";

type Props = {};

function Courses({}: Props) {
    return (
        <>
            <CourseBanner />
            <RecentCoursesSection />
            <BestSellersSection
                limit={4}
                display="Col"
                titleText="Más"
                titleTextSpan="vendidos"
                titleDisplay="Row"
                classNames={["pt-50"]}
            ></BestSellersSection>
            <AllCoursesSection />
        </>
    );
}

export default Courses;
