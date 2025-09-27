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
 * Custom hook to fetch the default (free) courses for a user, optionally excluding the current course.
 *
 * - Uses React Query's `useQuery` to handle caching, loading, and error states.
 * - Retrieves data from local storage using the provided `key`.
 * - Gets the user data by `userID`.
 * - Maps default courses with the user's progress.
 * - Optionally filters out a course with `currentCourseID` to avoid duplication.
 *
 * @param key The local storage key where course data is stored.
 * @param userID The ID of the user whose courses are being retrieved.
 * @param currentCourseID (Optional) ID of a course to exclude from the results.
 *
 * @returns React Query's query object containing `data`, `isLoading`, `error`, etc.
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
