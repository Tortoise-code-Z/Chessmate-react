import { useQuery } from "@tanstack/react-query";
import { UseCourseApiType } from "../types/types";
import {
    getDataLocalStorage,
    getDefaultCourse,
    getUserDefaultCourseThemes,
} from "../api";

/**
 * useDefaultCourseById - Custom hook to fetch a default course by its ID along with the user's progress.
 *
 * This hook retrieves a default course and the current user's theme completion states from local storage.
 *
 * @param key - Local storage key where default courses and user progress data are stored.
 * @param courseID - The ID of the default course to fetch.
 * @param userID - The ID of the user whose progress should be included.
 *
 * @returns A React Query object containing:
 *  - `data`: An object with:
 *      - `courses`: The default course data.
 *      - `userThemeStates`: Array of theme progress states for this user.
 *  - `isLoading`: Whether the query is currently loading.
 *  - `error`: Any error encountered while fetching.
 *  - `refetch`: Function to manually refetch the course data.
 *
 * @remarks
 * - Useful for default courses where progress tracking is needed.
 * - Data is cached for 5 minutes (`staleTime`) to reduce repeated reads.
 */

export default function useDefaultCourseById(
    key: string,
    courseID: number | undefined,
    userID: number | undefined
) {
    const queryFunction: () => Promise<UseCourseApiType> = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            if (!userID)
                throw new Error(
                    "Ha habido un error al recuperar el ID del usuario..."
                );

            if (!courseID)
                throw new Error(
                    "Ha habido un error al recuperar el ID del curso.."
                );

            const courses = getDefaultCourse(data, courseID);
            const userDefaultCourseThemes = getUserDefaultCourseThemes(
                data,
                userID,
                courseID
            );

            return {
                courses: courses,
                userThemeStates: userDefaultCourseThemes,
            };
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery<UseCourseApiType>({
        queryKey: ["defaultCourseById", courseID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
