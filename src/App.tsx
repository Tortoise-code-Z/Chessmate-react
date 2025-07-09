import { RouterProvider } from "react-router-dom";
import { route } from "./pages";
import useUserAuth from "./hooks/UseUserAuth";

type Props = {};

function App({}: Props) {
    const {
        query: { isLoading },
    } = useUserAuth();

    if (isLoading) return <p>Revisando sesion...</p>;

    return (
        <>
            <RouterProvider router={route} />
        </>
    );
}

export default App;
