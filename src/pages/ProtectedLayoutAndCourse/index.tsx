import CourseExists from "../CourseExists";
import Layout from "../Layout";
import ProtectedCourse from "../ProtectedCourse";

type Props = {
    checkProtectedCourse?: boolean;
};

/**
 * ProtectedLayoutAndCourse - React component that conditionally wraps content with course existence and protection checks.
 *
 * Features:
 * - Ensures the course exists using `CourseExists`.
 * - Optionally wraps the content with `ProtectedCourse` to enforce user and course authorization.
 * - Renders the standard `Layout` if `checkProtectedCourse` is false.
 *
 * Props:
 * - `checkProtectedCourse` (optional): Boolean indicating whether to enforce course protection; defaults to `true`.
 *
 * @returns JSX.Element: A layout that conditionally applies course protection and existence checks.
 */

function ProtectedLayoutAndCourse({ checkProtectedCourse = true }: Props) {
    return (
        <CourseExists>
            {checkProtectedCourse ? <ProtectedCourse /> : <Layout />}
        </CourseExists>
    );
}

export default ProtectedLayoutAndCourse;
