import { useQuery } from "@tanstack/react-query";
import { BBDD, UseCourseApiType } from "../types/types";
import {
    getDataLocalStorage,
    getDefaultCourse,
    getUserDefaultCourseThemes,
} from "../api";
import {
    ERROR_GET_COURSE_ID_MSG,
    ERROR_GET_COURSE_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_THEMES_ID_MSG,
    ERROR_GET_USER_ID_MSG,
} from "../consts/api";

/**
 * useDefaultCourseById - Custom React hook for fetching a default course along with user theme states by course ID.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch default course data from local storage.
 * - Retrieves user-specific theme completion states for the course.
 * - Handles errors for missing data, course ID, user ID, or theme states.
 *
 * @param key - Local storage key to fetch the database from.
 * @param courseID - ID of the default course to fetch.
 * @param userID - ID of the user to fetch theme states for.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing the course and the user's theme states.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and stale-time management.
 */

export default function useDefaultCourseById(
    key: string,
    courseID: number | undefined,
    userID: number | undefined
) {
    const queryFunction: () => Promise<UseCourseApiType> = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!userID) throw new Error(ERROR_GET_USER_ID_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);

            const course = getDefaultCourse(data, courseID);
            if (!course) throw new Error(ERROR_GET_COURSE_MSG);

            const userDefaultCourseThemes = getUserDefaultCourseThemes(
                data,
                userID,
                courseID
            );

            if (!userDefaultCourseThemes)
                throw new Error(ERROR_GET_THEMES_ID_MSG);

            return {
                courses: course,
                userThemeStates: userDefaultCourseThemes,
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery<UseCourseApiType>({
        queryKey: ["defaultCourseById", courseID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
