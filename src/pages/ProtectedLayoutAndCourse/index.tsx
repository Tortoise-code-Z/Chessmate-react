import CourseExists from "../CourseExists";
import Layout from "../Layout";
import ProtectedCourse from "../ProtectedCourse";

type Props = {
    checkProtectedCourse?: boolean;
};

function ProtectedLayoutAndCourse({ checkProtectedCourse = true }: Props) {
    return (
        <CourseExists>
            {checkProtectedCourse ? <ProtectedCourse /> : <Layout />}
        </CourseExists>
    );
}

export default ProtectedLayoutAndCourse;
