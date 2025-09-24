import { useQuery } from "@tanstack/react-query";
import { getDataLocalStorage, getUserById } from "../api";
import { ERROR_GET_DATA_MSG, ERROR_GET_USER_MSG } from "../consts/api";
import { BBDD } from "../types/types";

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

export default function useUserEmail(key: string, userID: number | undefined) {
    const queryFunction: () => Promise<string | undefined> = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);
            if (!data) throw new Error(ERROR_GET_DATA_MSG);

            const user = getUserById(userID, data);
            if (!user && userID) throw new Error(ERROR_GET_USER_MSG);

            return user?.email;
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
