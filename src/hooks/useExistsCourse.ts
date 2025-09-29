import { useQuery } from "@tanstack/react-query";
import { getCourses, getDataLocalStorage } from "../api";
import { ERROR_GET_COURSE_ID_MSG, ERROR_GET_DATA_MSG } from "../consts/api";
import { BBDD } from "../types/types";

/**
 * useCourseExists - Custom React hook to check if a specific course exists in the database.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch courses from local storage.
 * - Checks if a course with the given ID exists.
 * - Handles errors for missing data or invalid course ID.
 *
 * @param courseID - ID of the course to check for existence.
 * @param key - Local storage key to fetch the database from.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing a boolean indicating whether the course exists.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and query updates.
 */

export default function useCourseExists(
    courseID: number | undefined,
    key: string
) {
    const queryFunction = async (): Promise<boolean> => {
        try {
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);

            const courses = getCourses(data);

            const existsCourse = courses.some(
                (course) => course.courseID === courseID
            );

            return existsCourse;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const query = useQuery({
        queryKey: ["existCourse", courseID],
        queryFn: queryFunction,
    });

    return query;
}
