import { useQuery } from "@tanstack/react-query";
import { BBDD, Opinion, User } from "../types/types";
import { getDataLocalStorage } from "../api";
import { ERROR_GET_DATA_MSG } from "../consts/api";

/**
 * useUsersOpinions - Custom React hook for fetching a limited set of user opinions.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch opinions from local storage.
 * - Maps each opinion to include the full user object instead of just the user ID.
 * - Limits the returned opinions to the first 4 entries.
 * - Caches the results for 5 minutes (`staleTime`).
 *
 * @param key The local storage key where opinions and user data are stored.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing the mapped list of opinions with associated user information.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Refetch function to manually refresh the opinions list.
 */

export default function useUsersOpinions(key: string) {
    const queryFunction: () => Promise<Opinion[]> = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);
            if (!data) throw new Error(ERROR_GET_DATA_MSG);

            const opinions = data.opinions;
            const filteredOpinions = opinions.slice(0, 4).map((o) => {
                const user = data.users.find((u) => u.userID === o.idUser);
                const { idUser, ...rest } = o;

                return { ...rest, user: user ?? ({} as User) };
            });

            return filteredOpinions;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["usersOpinions"],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
