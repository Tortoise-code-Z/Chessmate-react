import { useQuery } from "@tanstack/react-query";
import { CourseJSON, FilterOptions, IsObtainedCourse } from "../types/types";
import {
    getAllCourses,
    getDataLocalStorage,
    getFilteredCourses,
    getSearchedCourses,
    getUserObtainedCourses,
} from "../api";

/**
 * Custom hook to fetch all courses from local storage, optionally filtered by search or filter criteria.
 *
 * - Uses `@tanstack/react-query` to manage caching and loading states.
 * - Combines user-obtained courses with general course data.
 *
 * @param key - The localStorage key to retrieve the database.
 * @param search - Optional search string to filter courses by title or content.
 * @param filter - Optional filter object to filter courses.
 * @param userID - Optional ID of the user to mark obtained courses.
 * @returns React Query object with `data`, `isLoading`, `error`, etc., containing the list of courses with obtained status.
 */

export default function useAllCourses(
    key: string,
    search: string,
    filter: FilterOptions | undefined,
    userID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const data = getDataLocalStorage(key);

            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const userCourses = getUserObtainedCourses(userID, data);

            if (!search && !filter) {
                return getAllCourses(userCourses, data);
            }

            if (search && !filter) {
                return getSearchedCourses(search, userCourses, data);
            }

            if (filter && !search) {
                return getFilteredCourses(filter, userCourses, data);
            }

            return [] as (CourseJSON & IsObtainedCourse)[];
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["allCourses", search, filter, userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
