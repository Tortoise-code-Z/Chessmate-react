import { useQuery } from "@tanstack/react-query";
import { DefualtCourse, Progress } from "../types/types";
import {
    getDataLocalStorage,
    getDefaultCoursesWithProgress,
    getUserById,
} from "../api";

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
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            if (!userID)
                throw new Error(
                    "Ha habido un error al recuperar el ID del usuario..."
                );

            const user = getUserById(userID, data);

            if (!user)
                throw new Error("Ha habido un error al recuperar los datos...");

            let defaultCourses = getDefaultCoursesWithProgress(data, user);

            if (currentCourseID) {
                defaultCourses = defaultCourses.filter(
                    (c) => c?.curseID !== currentCourseID
                );
            }

            return defaultCourses;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["defaultCourses", currentCourseID],
        queryFn: queryFunction,
    });
}
