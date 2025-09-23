import LoadingPage from "../../components/LoadingPage";
import useUserAuth from "../../hooks/UseUserAuth";
import ErrorElement from "../ErrorElement";
import Layout from "../Layout";

/**
 * ProtectedLayout component that wraps the main Layout with authorization checks.
 *
 * Features:
 * - Uses IsAuthorized to ensure only authenticated users can access the layout.
 * - Renders the main Layout component for authorized users.
 *
 * @returns JSX element rendering the protected layout for authorized users.
 */

export default function ProtectedLayout() {
    const {
        query: { isLoading, error },
    } = useUserAuth();

    if (isLoading) return <LoadingPage msg="Revisando sesión..." />;

    if (error) {
        return <ErrorElement msg={error.message} />;
    }

    return <Layout />;
}
