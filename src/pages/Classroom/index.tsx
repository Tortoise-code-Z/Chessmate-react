import { useParams } from "react-router-dom";
import ClassZoneSection from "../../components/ClassZoneSection";
import OtherUserCoursesSection from "../../components/OtherUserCoursesSection";
import { JSON_URL } from "../../consts/url";
import useDefaultCourseById from "../../hooks/useDefaultCourseById";
import { DefualtCourse } from "../../types/types";

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
