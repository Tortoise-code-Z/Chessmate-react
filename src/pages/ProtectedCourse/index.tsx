import IsAuthorized from "../IsAutorized";
import IsAutorizedToCourse from "../IsAutorizedToCourse";
import Layout from "../Layout";

type Props = {};

/**
 * ProtectedCourse component that guards access to a course classroom based on user enrollment.
 *
 * Features:
 * - Displays a LoadingPage while verifying if the user has obtained the course.
 * - Redirects to the course detail page if the user has not obtained the course.
 * - Renders child routes via Outlet if the user has access.
 *
 * Hooks:
 * - useParams: Retrieves the course ID from the route parameters.
 * - useUserAuthStore: Provides the current authenticated user's data.
 * - useHaveObtainedCourse: Checks if the user has obtained the specified course.
 *
 * @returns JSX element rendering either the loading state, a redirect, or the protected course content.
 */

function ProtectedCourse({}: Props) {
    return (
        <IsAuthorized>
            <IsAutorizedToCourse>
                <Layout />
            </IsAutorizedToCourse>
        </IsAuthorized>
    );
}

export default ProtectedCourse;
