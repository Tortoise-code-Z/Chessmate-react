import { RouterProvider } from "react-router-dom";
import { route } from "./pages";
import LoadingPage from "./components/LoadingPage";
import ErrorElement from "./pages/ErrorElement";
import useInitDataBase from "./hooks/useInitDataBase";
import FeedbackListener from "./components/FeedbackListener";

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

    if (!isDataBaseSent)
        return <LoadingPage msg="Inicializando base de datos..." />;

    if (dbError) {
        return <ErrorElement msg={dbError} />;
    }

    return (
        <>
            <RouterProvider router={route} />
        </>
    );
}

export default App;
