import IsAuthorized from "../IsAutorized";
import Layout from "../Layout";

/**
 * ProtectedLayout - React component that wraps the main layout with an authentication check.
 *
 * Features:
 * - Ensures the user is authenticated using `IsAuthorized`.
 * - Renders the `Layout` component only if the user passes the authorization check.
 *
 * Props:
 * - None
 *
 * @returns JSX.Element: A protected layout that is only accessible to authorized users.
 */

export default function ProtectedLayout() {
    return (
        <IsAuthorized>
            <Layout />
        </IsAuthorized>
    );
}
