import ClassZoneSection from "./ClassZoneSection";
import OtherUserCoursesSection from "./OtherUserCoursesSection";

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
