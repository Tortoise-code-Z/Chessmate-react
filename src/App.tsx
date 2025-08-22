import { RouterProvider } from "react-router-dom";
import { route } from "./pages";
import useUserAuth from "./hooks/UseUserAuth";
import { useEffect, useState } from "react";
import { DATABASE_KEY } from "./consts/dataBaseKey";
import { DATA_BASE } from "./consts/initBBDD";
import LoadingPage from "./components/LoadingPage";

type Props = {};

function App({}: Props) {
    const [isDataBaseSent, setIsDataBaseSent] = useState<boolean>(false);

    useEffect(() => {
        const initDataBase = () => {
            return new Promise<void>((resolve, reject) => {
                try {
                    if (!localStorage.getItem(DATABASE_KEY)) {
                        localStorage.setItem(
                            DATABASE_KEY,
                            JSON.stringify(DATA_BASE)
                        );
                    }
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        };

        initDataBase()
            .then(() => setIsDataBaseSent(true))
            .catch((err) => {
                setIsDataBaseSent(true);
                console.log(err);
            });
    }, []);

    const {
        query: { isLoading },
    } = useUserAuth();

    if (isLoading || !isDataBaseSent)
        return <LoadingPage msg="Revisando sesión..." />;

    return (
        <>
            <RouterProvider router={route} />
        </>
    );
}

export default App;
