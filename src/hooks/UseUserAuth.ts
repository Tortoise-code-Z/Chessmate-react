import { useQuery } from "@tanstack/react-query";
import { useUserAuthStore } from "./UseUserAuthStore";
import { UserAuth } from "../types/types";
import { useEffect } from "react";
import { USER_AUTH_KEY } from "../consts/dataBaseKey";

/**
 * Custom hook to manage authenticated user state across components and browser tabs.
 *
 * - Uses React Query's `useQuery` to retrieve user authentication data from local storage.
 * - Updates global user state in `useUserAuthStore` and manages loading state to prevent UI flicker.
 * - Listens to `storage` events to synchronize authentication state across multiple browser tabs.
 *
 * @returns An object containing:
 *  - `user`: The current authenticated user (`UserAuth`) or `null` if not logged in.
 *  - `query`: React Query's query object for the authentication data (`data`, `isLoading`, `error`, etc.).
 */

export default function useUserAuth() {
    const { user, setUser, setIsLoading } = useUserAuthStore();

    const queryFunction = async (): Promise<UserAuth | null> => {
        const stored = localStorage.getItem(USER_AUTH_KEY);
        if (!stored) return null;

        try {
            const user: UserAuth = JSON.parse(stored);
            return user;
        } catch {
            return null;
        }
    };

    const query = useQuery<UserAuth | null>({
        queryKey: ["userAuth"],
        queryFn: queryFunction,
    });

    // Una vez se ejecute con exito la query, se manda la data a user y se establece un loading para evitar parpadeos
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

    return { user, query };
}
