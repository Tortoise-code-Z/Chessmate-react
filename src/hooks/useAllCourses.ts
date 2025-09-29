import { useQuery } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    FilterOptions,
    IsObtainedCourse,
    UserDataApi,
} from "../types/types";
import {
    getDataLocalStorage,
    getFilteredCourses,
    getSearchedCourses,
    getUserById,
    getUserObtainedCourses,
} from "../api";
import { ERROR_GET_DATA_MSG, ERROR_GET_USER_MSG } from "../consts/api";

/**
 * useAllCourses - Custom React hook for fetching all courses with optional search and filter.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch courses from local storage.
 * - Applies search and filter criteria to narrow down results.
 * - Adds `isObtained` flag for each course based on whether the user has purchased it.
 * - Handles errors for missing data or user information.
 *
 * @param key - Local storage key to fetch the database from.
 * @param search - Search string to filter courses by name or description.
 * @param filter - Filter options to apply to the courses.
 * @param userData - User data object containing userID and requirement flags.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing the array of courses with `isObtained` flag.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and stale-time management.
 */

export default function useAllCourses(
    key: string,
    search: string,
    filter: FilterOptions | undefined,
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

            let courses: (CourseJSON & IsObtainedCourse)[] = [];

            const userCourses = getUserObtainedCourses(userData?.userID, data);

            if (!search && !filter) {
                courses = data.courses;
            }

            if (search && !filter) {
                courses = getSearchedCourses(search, data);
            }

            if (filter && !search) {
                courses = getFilteredCourses(filter, data);
            }

            const finalCourses =
                courses.map((c) => ({
                    ...c,
                    isObtained: userData.required
                        ? userCourses?.some(
                              (userCourse) => userCourse.courseId === c.courseID
                          )
                        : false,
                })) || ([] as (CourseJSON & IsObtainedCourse)[]);

            return finalCourses;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["allCourses", search, filter, userData.userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
