import { RouterProvider } from "react-router-dom";
import { route } from "./pages";
import useUserAuth from "./hooks/UseUserAuth";
import LoadingPage from "./components/LoadingPage";
import ErrorElement from "./pages/ErrorElement";
import useInitDataBase from "./hooks/useInitDataBase";

type Props = {};

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
