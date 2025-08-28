import { useQuery } from "@tanstack/react-query";
import { BBDD, ObtainedCourse } from "../types/types";

/**
 * Custom hook to fetch the default courses for a specific user.
 *
 * - Uses React Query's `useQuery` to handle caching, loading, and error states.
 * - Retrieves user data from local storage using the provided `key`.
 * - Returns the default courses for the user identified by `idUser`.
 *
 * @param key The local storage key where user data is stored.
 * @param idUser The ID of the user whose default courses are being retrieved.
 *
 * @returns React Query's query object containing `data` (array of `ObtainedCourse`), `isLoading`, `error`, etc.
 */

export default function useUserDataCourses(key: string, idUser: number) {
    const queryFunction: () => Promise<ObtainedCourse[]> = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);
            const user = data.users.find((u) => u.userID === idUser);
            return user?.defaultCourses ?? ([] as ObtainedCourse[]);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["userDefaultCourses"],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
