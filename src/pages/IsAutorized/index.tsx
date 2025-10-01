import { Navigate } from "react-router-dom";
import { PATHS } from "../../consts/paths";
import LoadingPage from "../../components/LoadingPage";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { ReactNode } from "react";

type Props = { children: ReactNode };

/**
 * IsAuthorized - React component that protects routes by checking user authentication.
 *
 * Features:
 * - Uses `useUserAuthStore` to determine the current user's authentication status and loading state.
 * - Displays `LoadingPage` with a message while checking authorization.
 * - Redirects unauthenticated users to the login page (`PATHS.login`) using `Navigate`.
 * - Renders child components only if the user is authenticated.
 *
 * Props:
 * - `children`: ReactNode(s) to render if the user is authorized.
 *
 * @returns JSX.Element: Either a loading indicator, a redirect to login, or the authorized children.
 */

function IsAuthorized({ children }: Props) {
    const { user, isLoading } = useUserAuthStore();

    if (isLoading && !user)
        return <LoadingPage msg="Revisando autorización..." />;

    if (!user) {
        return <Navigate to={PATHS.login} />;
    }

    return <>{children}</>;
}

export default IsAuthorized;
