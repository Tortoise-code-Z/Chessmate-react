import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { normalizeLanguage } from "../consts/i18n";
import {
    BBDD,
    CourseJSON,
    FilterOptions,
    IsObtainedCourse,
    UserDataApi,
} from "../types/types";
import {
    getCourses,
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
    const { i18n } = useTranslation();
    const lang = normalizeLanguage(i18n.language);

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
                courses = getCourses(data, lang);
            }

            if (search && !filter) {
                courses = getSearchedCourses(search, data, lang);
            }

            if (filter && !search) {
                courses = getFilteredCourses(filter, data, lang);
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
        queryKey: ["allCourses", search, filter, userData.userID, lang],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
