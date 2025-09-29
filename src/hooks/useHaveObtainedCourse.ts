import { useQuery } from "@tanstack/react-query";
import { getDataLocalStorage, getUserObtainedCourses } from "../api";
import {
    ERROR_GET_COURSE_ID_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_USER_ID_MSG,
} from "../consts/api";
import { BBDD } from "../types/types";

/**
 * useHaveObtainedCourse - Custom React hook to check if a user has obtained a specific course.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch user course data from local storage.
 * - Checks if the user has purchased or obtained the course with the given ID.
 * - Handles errors for missing data, course ID, or user ID.
 *
 * @param courseID - ID of the course to check.
 * @param userID - ID of the user to check ownership for.
 * @param key - Local storage key to fetch the database from.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing a boolean indicating whether the user has obtained the course.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and query updates.
 */

export default function useHaveObtainedCourse(
    courseID: number | undefined,
    userID: number | undefined,
    key: string
) {
    const queryFunction = async (): Promise<boolean> => {
        try {
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);
            if (!userID) throw new Error(ERROR_GET_USER_ID_MSG);

            const userCourses = getUserObtainedCourses(userID, data);
            const haveCourse = userCourses?.some(
                (course) => course.courseId === courseID
            );

            return !!haveCourse;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["haveCourse", userID, courseID],
        queryFn: queryFunction,
    });
}
