import { useEffect, useState } from "react";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import { DATA_BASE } from "../consts/initBBDD";

/**
 * Custom hook to initialize the local storage database with default data.
 *
 * - Checks if the database key exists in local storage; if not, it sets it with initial data.
 * - Manages loading and error states for database initialization.
 *
 * @returns An object containing:
 *  - `isDataBaseSent`: Boolean indicating if the database initialization has completed.
 *  - `dbError`: String containing an error message if initialization fails, otherwise `null`.
 */

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
