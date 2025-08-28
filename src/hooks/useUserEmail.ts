import { useQuery } from "@tanstack/react-query";
import { getDataLocalStorage, getUserById } from "../api";

/**
 * Custom hook to fetch the email of a specific user.
 *
 * - Uses React Query's `useQuery` to handle caching, loading, and error states.
 * - Retrieves user data from local storage using the provided `key`.
 * - Returns the email of the user identified by `userID`.
 *
 * @param key The local storage key where user data is stored.
 * @param userID The ID of the user whose email is being retrieved.
 *
 * @returns React Query's query object containing `data` (string email), `isLoading`, `error`, etc.
 */

export default function useUserEmail(key: string, userID: number) {
    const queryFunction: () => Promise<string> = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const user = getUserById(userID, data);

            return user?.email || "";
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    return useQuery({
        queryKey: ["userEmail", userID],
        queryFn: queryFunction,
    });
}
