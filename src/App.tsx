import { RouterProvider } from "react-router-dom";
import { route } from "./pages";
import useUserAuth from "./hooks/UseUserAuth";
import LoadingPage from "./components/LoadingPage";
import ErrorElement from "./pages/ErrorElement";
import useInitDataBase from "./hooks/useInitDataBase";

type Props = {};

/**
 * App component that initializes the application, handles authentication and database state,
 * and provides routing using React Router.
 *
 * Features:
 * - Initializes the database using useInitDataBase and handles initialization errors.
 * - Uses useUserAuth to manage user authentication state and loading status.
 * - Displays LoadingPage while checking database or user session.
 * - Displays ErrorElement if database initialization fails.
 * - Provides application routing via RouterProvider with the defined route configuration.
 *
 * @returns JSX element rendering the main application, including loading, error, or routed content.
 */

function App({}: Props) {
    const { dbError, isDataBaseSent } = useInitDataBase();

    const {
        query: { isLoading },
    } = useUserAuth();

    if (dbError) {
        return <ErrorElement msg={dbError} />;
    }

    if (isLoading || !isDataBaseSent)
        return <LoadingPage msg="Revisando sesión..." />;

    return (
        <>
            <RouterProvider router={route} />
        </>
    );
}

export default App;
