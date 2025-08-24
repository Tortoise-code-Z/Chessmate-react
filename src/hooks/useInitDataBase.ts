import { useEffect, useState } from "react";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import { DATA_BASE } from "../consts/initBBDD";

export default function useInitDataBase() {
    const [isDataBaseSent, setIsDataBaseSent] = useState<boolean>(false);
    const [dbError, setDbError] = useState<string | null>(null);

    useEffect(() => {
        const initDataBase = async (): Promise<void> => {
            try {
                if (!localStorage.getItem(DATABASE_KEY)) {
                    localStorage.setItem(
                        DATABASE_KEY,
                        JSON.stringify(DATA_BASE)
                    );
                }

                setIsDataBaseSent(true);
            } catch (error) {
                console.error(error);
                setDbError(
                    "Ha habido un problema al inicializar la database, intentelo de nuevo."
                );
                setIsDataBaseSent(true);
            }
        };

        initDataBase();
    }, []);

    return { isDataBaseSent, dbError };
}
