import { Navigate } from "react-router-dom";
import { PATHS } from "../../consts/paths";
import LoadingPage from "../../components/LoadingPage";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { ReactNode } from "react";

type Props = { children: ReactNode };

/**
 * IsAuthorized component that restricts access to authenticated users.
 *
 * Features:
 * - Shows `LoadingPage` while user authentication is being verified.
 * - Redirects unauthenticated users to the login page using `Navigate`.
 * - Renders child components only if the user is authenticated.
 *
 * Hooks:
 * - `useUserAuthStore`: Retrieves current user information and loading state.
 *
 * Props:
 * - `children` (ReactNode): Components to render if the user is authorized.
 *
 * @returns JSX element that conditionally renders children or redirects based on authentication.
 */

function IsAuthorized({ children }: Props) {
    const { user, isLoading } = useUserAuthStore();

    if (isLoading && !user)
        return <LoadingPage msg="Revisando autorización..." />;

    if (!user) {
        return <Navigate to={`/${PATHS.login}`} />;
    }

    return <>{children}</>;
}

export default IsAuthorized;
