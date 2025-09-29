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
 * useBestSeller - Custom React hook for fetching the top-selling courses.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch courses from local storage.
 * - Orders courses by sales in descending order and limits the number returned.
 * - Adds `isObtained` flag based on whether the user has purchased each course.
 * - Handles errors for missing data or user information.
 *
 * @param key - Local storage key to fetch the database from.
 * @param limit - Maximum number of top-selling courses to return (defaults to 5).
 * @param userData - User data object containing userID and requirement flags.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing the array of top-selling courses with `isObtained` flag.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and stale-time management.
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
                          (uc) => uc?.courseId === course?.courseID
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
