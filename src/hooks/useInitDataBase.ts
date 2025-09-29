import { useEffect, useState } from "react";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import { DATA_BASE } from "../consts/initBBDD";
import { getDataLocalStorage, setItemLocalStorage } from "../api";
import { ERROR_GET_DATA_MSG } from "../consts/api";
import { BBDD } from "../types/types";

/**
 * useInitDataBase - Custom React hook for initializing the local database on app startup.
 *
 * This hook:
 * - Checks if the local storage contains the database.
 * - If not present, it initializes local storage with default database values (`DATA_BASE`).
 * - Tracks whether the database has been successfully set or if an error occurred.
 *
 * @returns An object containing:
 * - `isDataBaseSent` boolean flag indicating if the database initialization has completed.
 * - `dbError` string or null containing any error message that occurred during initialization.
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
