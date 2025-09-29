import { useQuery } from "@tanstack/react-query";
import { BBDD, DefualtCourse, Progress } from "../types/types";
import {
    getDataLocalStorage,
    getDefaultCoursesWithProgress,
    getUserById,
} from "../api";
import {
    ERROR_GET_COURSES_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_USER_ID_MSG,
    ERROR_GET_USER_MSG,
} from "../consts/api";

/**
 * useDefaultCourses - Custom React hook for fetching all default courses with user progress.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch default courses from local storage.
 * - Computes user-specific progress for each default course.
 * - Optionally filters out a specific current course from the results.
 * - Handles errors for missing data, user ID, or user information.
 *
 * @param key - Local storage key to fetch the database from.
 * @param userID - ID of the user to compute progress for.
 * @param currentCourseID - Optional course ID to exclude from the results.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing an array of default courses with progress.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and query updates.
 */

export default function useDefaultCourses(
    key: string,
    userID: number | undefined,
    currentCourseID?: number
) {
    const queryFunction: () => Promise<
        (DefualtCourse & Progress)[]
    > = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!userID) throw new Error(ERROR_GET_USER_ID_MSG);

            const user = getUserById(userID, data);
            if (!user) throw new Error(ERROR_GET_USER_MSG);

            let defaultCourses = getDefaultCoursesWithProgress(data, user);
            if (!defaultCourses) throw new Error(ERROR_GET_COURSES_MSG);

            if (currentCourseID) {
                defaultCourses = defaultCourses.filter(
                    (c) => c?.courseID !== currentCourseID
                );
            }

            return defaultCourses;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["defaultCourses", currentCourseID],
        queryFn: queryFunction,
    });
}
