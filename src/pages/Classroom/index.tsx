import { useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ClassZoneSection from "./ClassZoneSection";
import TitleHx from "../../components/TitleHx";
import FeedbackMessage from "../../components/FeedbackMessage";

type Props = {};

function Classroom({}: Props) {
    const params = useParams();

    return (
        <>
            <FeedbackMessage />
            <ClassZoneSection />
            <UserCoursesSection
                obtainedCoursesLimit={3}
                defaultCourseClassID={Number(params.id)}
                showObtainedCourses={false}
            >
                <TitleHx level={2}>
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        Otros
                    </span>{" "}
                    de mis cursos
                </TitleHx>
            </UserCoursesSection>
        </>
    );
}

export default Classroom;
