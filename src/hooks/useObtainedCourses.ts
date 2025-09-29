import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON, Progress } from "../types/types";
import {
    getCourseById,
    getDataLocalStorage,
    getUserObtainedCourses,
} from "../api";
import {
    ERROR_GET_COURSE_MSG,
    ERROR_GET_COURSES_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_USER_ID_MSG,
} from "../consts/api";

/**
 * useObtainedCourses - Custom React hook for fetching courses obtained by a specific user.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch the user's obtained courses from local storage.
 * - Maps each obtained course to include the user's progress.
 * - Optionally limits the number of courses returned and can exclude a current course.
 * - Handles errors for missing data, user ID, or invalid course references.
 *
 * @param key - Local storage key to fetch the database from.
 * @param userId - ID of the user whose obtained courses are fetched.
 * @param limit - Optional maximum number of courses to return.
 * @param currentCourseID - Optional course ID to exclude from the results.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing an array of obtained courses with progress.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and query updates.
 */

export default function useObtainedCourses(
    key: string,
    userId: number | undefined,
    limit?: number,
    currentCourseID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & Progress)[]
    > = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!userId) throw new Error(ERROR_GET_USER_ID_MSG);

            const userCourses = getUserObtainedCourses(userId, data);
            if (!userCourses) throw new Error(ERROR_GET_COURSES_MSG);

            let mappingUserCourses = userCourses.map((uc) => {
                const id = uc.courseId;
                const course = getCourseById(data, id);
                if (!course) throw new Error(ERROR_GET_COURSE_MSG);

                return { ...course, progress: uc?.progress };
            });

            if (currentCourseID) {
                mappingUserCourses = mappingUserCourses.filter(
                    (c) => c.courseID !== currentCourseID
                );
            }

            return mappingUserCourses.slice(
                0,
                limit ?? mappingUserCourses.length
            );
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["courses", limit, currentCourseID],
        queryFn: queryFunction,
    });
}
