import { useQuery } from "@tanstack/react-query";
import { BBDD, Opinion, User } from "../types/types";
import { getDataLocalStorage } from "../api";
import { ERROR_GET_DATA_MSG } from "../consts/api";

/**
 * Custom hook to fetch the most recent user opinions.
 *
 * - Uses React Query's `useQuery` to handle caching, loading, and error states.
 * - Retrieves opinions and user data from local storage using the provided `key`.
 * - Returns up to the 4 most recent opinions, each augmented with the corresponding user information.
 *
 * @param key The local storage key where opinions and user data are stored.
 *
 * @returns React Query's query object containing `data` (array of `Opinion` with user info), `isLoading`, `error`, etc.
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
