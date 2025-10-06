import { useQuery } from "@tanstack/react-query";
import { getDataLocalStorage, getUserById } from "../api";
import { ERROR_GET_DATA_MSG, ERROR_GET_USER_MSG } from "../consts/api";
import { BBDD } from "../types/types";

/**
 * useUserEmail - Custom React hook for fetching a user's email by their ID.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch user data from local storage.
 * - Retrieves the email of the user with the specified `userID`.
 * - Throws an error if the local storage data or the user is not found.
 *
 * @param key The local storage key where user data is stored.
 * @param userID The ID of the user whose email is to be fetched.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing the user's email, or `undefined` if not found.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Refetch function to manually refresh the user email.
 */

export default function useUserEmail(key: string, userID: number | undefined) {
    const queryFunction: () => Promise<string | boolean> = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);
            if (!data) throw new Error(ERROR_GET_DATA_MSG);

            const user = getUserById(userID, data);
            if (!user && userID) throw new Error(ERROR_GET_USER_MSG);

            return user?.email ? user.email : false;
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
