import IsAuthorized from "../IsAutorized";
import IsAutorizedToCourse from "../IsAutorizedToCourse";
import Layout from "../Layout";

type Props = {};

/**
 * ProtectedCourse - React component that wraps course content with authorization checks.
 *
 * Features:
 * - Ensures the user is authenticated using `IsAuthorized`.
 * - Checks if the user has access to the specific course with `IsAutorizedToCourse`.
 * - Renders the main course layout via the `Layout` component if all authorization checks pass.
 *
 * Props:
 * - None
 *
 * @returns JSX.Element: A protected course layout that only renders for authorized users.
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
