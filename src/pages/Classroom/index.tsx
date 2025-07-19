import ClassZoneSection from "../../components/ClassZoneSection";
import OtherUserCoursesSection from "../../components/OtherUserCoursesSection";

type Props = {};

function Classroom({}: Props) {
    return (
        <>
            <ClassZoneSection />
            <OtherUserCoursesSection />
        </>
    );
}

export default Classroom;
