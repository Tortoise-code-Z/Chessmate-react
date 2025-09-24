import { useEffect, useState } from "react";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import { DATA_BASE } from "../consts/initBBDD";
import { getDataLocalStorage, setItemLocalStorage } from "../api";
import { ERROR_GET_DATA_MSG } from "../consts/api";
import { BBDD } from "../types/types";

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
                if (!DATA_BASE) throw new Error(ERROR_GET_DATA_MSG);
                if (!getDataLocalStorage<BBDD>(DATABASE_KEY)) {
                    setItemLocalStorage(DATABASE_KEY, DATA_BASE);
                }

                setIsDataBaseSent(true);
            } catch (error) {
                console.error(error);
                setDbError((error as Error).message);
                setIsDataBaseSent(true);
                throw error;
            }
        };

        initDataBase();
    }, []);

    return { isDataBaseSent, dbError };
}
