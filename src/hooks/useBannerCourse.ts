import { useQuery } from "@tanstack/react-query";
import { CourseJSON, IsObtainedCourse } from "../types/types";
import {
    getCourses,
    getDataLocalStorage,
    getRandom,
    getUserObtainedCourses,
    orderedMayorToMenorByKey,
} from "../api";

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

export default function useBannerCourse(key: string, userID?: number) {
    const queryFunction: () => Promise<
        CourseJSON & IsObtainedCourse
    > = async () => {
        try {
            const data = getDataLocalStorage(key);

            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const courses = getCourses(data);

            const filteredCourses = orderedMayorToMenorByKey(
                courses,
                "sales"
            ).slice(0, 6);

            const userCourses = getUserObtainedCourses(userID, data);

            const bannerCourse = getRandom(filteredCourses);

            return {
                ...bannerCourse,
                isObtained: userCourses.some(
                    (userCourse) => userCourse.courseId === bannerCourse.curseID
                ),
            };
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["bannerCourse", userID],
        queryFn: queryFunction,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
}
