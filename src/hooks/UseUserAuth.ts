import { useQuery } from "@tanstack/react-query";
import { useUserAuthStore } from "./UseUserAuthStore";
import { UserAuth } from "../types/types";
import { useEffect } from "react";
import { USER_AUTH_KEY } from "../consts/dataBaseKey";
import { getDataLocalStorage } from "../api";

/**
 * useUserAuth - Custom React hook for managing authenticated user state.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch the current authenticated user from local storage.
 * - Updates the global user state and loading state via `useUserAuthStore`.
 * - Listens for changes to `userAuth` in local storage to synchronize authentication across browser tabs.
 *
 * @returns An object containing:
 * - `query`: The React Query object with properties `data`, `isLoading`, `isError`, `isSuccess`, and `refetch`.
 */

export default function useUserAuth() {
    const { setUser, setIsLoading } = useUserAuthStore();

    const queryFunction = async (): Promise<UserAuth | null> => {
        try {
            const user = getDataLocalStorage<UserAuth>(USER_AUTH_KEY);
            if (!user) return null;

            return user;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const query = useQuery<UserAuth | null>({
        queryKey: ["userAuth"],
        queryFn: queryFunction,
    });

    useEffect(() => {
        if (query.isLoading) {
            setIsLoading(true);
        } else {
            if (query.isSuccess) {
                setIsLoading(false);
                setUser(query.data);
            }
        }
    }, [query.isSuccess, query.data]);

    // Conexion entre pestañas
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === "userAuth") {
                query.refetch();
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return { query };
}
