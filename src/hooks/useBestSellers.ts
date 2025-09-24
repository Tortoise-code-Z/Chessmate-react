import { useQuery } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    IsObtainedCourse,
    UserDataApi,
} from "../types/types";
import {
    getCourses,
    getDataLocalStorage,
    getUserById,
    getUserObtainedCourses,
    orderedMayorToMenorByKey,
} from "../api";
import { ERROR_GET_DATA_MSG, ERROR_GET_USER_MSG } from "../consts/api";

/**
 * Hook that fetches the “Best Seller” courses.
 *
 * - Retrieves course data from local storage using the provided key.
 * - Filters the courses by sales, orders them from highest to lowest, and limits the results.
 * - Checks which courses have been obtained by the user (if userID is provided).
 * - Handles errors and manages caching via React Query.
 *
 * @param key Local storage key where courses are stored.
 * @param limit Maximum number of courses to return.
 * @param userID Optional ID of the user to check obtained courses.
 * @returns Object with React Query states and data: `{ data, isLoading, error, ... }`.
 */

export default function useBestSeller(
    key: string,
    limit: number | undefined,
    userData: UserDataApi
) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);
            if (!data) throw new Error(ERROR_GET_DATA_MSG);

            const user = getUserById(userData?.userID, data);
            if (!user && userData?.userID) throw new Error(ERROR_GET_USER_MSG);

            const courses = getCourses(data);
            const userCourses = getUserObtainedCourses(userData?.userID, data);

            const filteredCourses = orderedMayorToMenorByKey(
                courses,
                "sales"
            ).slice(0, limit || 5);

            return filteredCourses.map((course) => ({
                ...course,
                isObtained: userData.required
                    ? userCourses?.some(
                          (uc) => uc?.courseId === course?.curseID
                      )
                    : false,
            }));
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["bestSellers", userData?.userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
