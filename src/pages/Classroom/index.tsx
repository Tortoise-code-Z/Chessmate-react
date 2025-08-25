import { useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ClassZoneSection from "./ClassZoneSection";
import { useErrorStore } from "../../hooks/useErrorStore";
import ErrorFixedMsg from "../../components/ErrorElement/ErrorFixedMsg";
import TitleHx from "../../components/TitleHx";

type Props = {};

function Classroom({}: Props) {
    const params = useParams();
    const { isError, errorMsg, setState: setError } = useErrorStore();

    return (
        <>
            {isError && (
                <ErrorFixedMsg
                    onClose={() => setError(false)}
                    errorMsg={errorMsg}
                />
            )}
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
