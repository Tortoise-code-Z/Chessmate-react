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
    getRandom,
    getUserById,
    getUserObtainedCourses,
    orderedMayorToMenorByKey,
} from "../api";
import { ERROR_GET_DATA_MSG, ERROR_GET_USER_MSG } from "../consts/api";

/**
 * useBannerCourse - Custom React hook for fetching a single course to display in a banner.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch courses from local storage.
 * - Selects the top 6 courses by sales and picks one randomly for the banner.
 * - Adds `isObtained` flag based on whether the user has purchased the selected course.
 * - Handles errors for missing data or user information.
 *
 * @param key - Local storage key to fetch the database from.
 * @param userData - User data object containing userID and requirement flags.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing the selected banner course with `isObtained` flag.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Query is cached indefinitely and does not refetch automatically.
 */

export default function useBannerCourse(key: string, userData: UserDataApi) {
    const queryFunction: () => Promise<
        CourseJSON & IsObtainedCourse
    > = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);
            if (!data) throw new Error(ERROR_GET_DATA_MSG);

            const user = getUserById(userData?.userID, data);
            if (!user && userData?.userID) throw new Error(ERROR_GET_USER_MSG);

            const courses = getCourses(data);
            const filteredCourses = orderedMayorToMenorByKey(
                courses,
                "sales"
            ).slice(0, 6);

            const bannerCourse = getRandom(filteredCourses);
            const userCourses = getUserObtainedCourses(userData.userID, data);

            return {
                ...bannerCourse,
                isObtained: userData.required
                    ? userCourses?.some(
                          (userCourse) =>
                              userCourse.courseId === bannerCourse.courseID
                      )
                    : false,
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["bannerCourse", userData.userID],
        queryFn: queryFunction,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
}
