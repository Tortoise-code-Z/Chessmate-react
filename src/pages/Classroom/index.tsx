import { useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ClassZoneSection from "./ClassZoneSection";

type Props = {};

function Classroom({}: Props) {
    const params = useParams();

    return (
        <>
            <ClassZoneSection />
            <UserCoursesSection
                obtainedCoursesLimit={3}
                defaultCourseClassID={Number(params.id)}
                showObtainedCourses={false}
            >
                <h2>
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        Otros
                    </span>{" "}
                    de mis cursos
                </h2>
            </UserCoursesSection>
        </>
    );
}

export default Classroom;
