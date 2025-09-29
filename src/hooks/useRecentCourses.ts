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
    getUserById,
    getUserObtainedCourses,
} from "../api";
import { ERROR_GET_DATA_MSG, ERROR_GET_USER_MSG } from "../consts/api";

/**
 * useRecentCourses - Custom React hook for fetching the most recent courses.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch courses from local storage.
 * - Sorts courses by creation date in descending order and returns the top 3.
 * - Determines if each course has been obtained by the user (`isObtained`) based on `userData`.
 * - Handles errors for missing database or invalid user data.
 *
 * @param key - Local storage key to fetch the database from.
 * @param userData - Object containing user ID and flags for course access.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing an array of recent courses with `isObtained` flag.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and query updates.
 */

export default function useRecentCourses(key: string, userData: UserDataApi) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);
            if (!data) throw new Error(ERROR_GET_DATA_MSG);

            const user = getUserById(userData?.userID, data);
            if (!user && userData?.userID) throw new Error(ERROR_GET_USER_MSG);

            const courses = getCourses(data);
            const filteredCourses = courses
                .sort((a, b) => {
                    const courseDateA = new Date(a.createdAt).getTime();
                    const courseDateB = new Date(b.createdAt).getTime();
                    return courseDateB - courseDateA;
                })
                .slice(0, 3);

            const userCourses = getUserObtainedCourses(userData?.userID, data);

            return filteredCourses.map((c) => ({
                ...c,
                isObtained: userData?.required
                    ? userCourses?.some((uc) => uc.courseId === c.courseID)
                    : false,
            }));
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["recentCourses", userData.userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
