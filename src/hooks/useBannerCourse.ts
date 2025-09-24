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
 * useBannerCourse - Custom React hook to fetch a single course for a banner display.
 *
 * This hook:
 * - Retrieves course data from local storage using a provided key.
 * - Sorts courses by sales in descending order and selects the top 6.
 * - Picks a random course from these top courses.
 * - Checks if the user has already obtained this course.
 * - Returns a React Query object with the banner course and its obtained status.
 *
 * @param key - Local storage key to fetch course data.
 * @param userID - Optional user ID to determine if the course is already obtained.
 * @returns A React Query object containing the banner course with `isObtained`, `data`, `isLoading`, `error`, etc.
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
                              userCourse.courseId === bannerCourse.curseID
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
