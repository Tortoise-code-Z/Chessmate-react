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
 * Custom hook to fetch the most recent courses.
 *
 * - Uses React Query's `useQuery` to handle caching, loading, and error states.
 * - Retrieves course data from local storage using the provided `key`.
 * - Sorts courses by creation date and returns the top 3 most recent courses.
 * - Marks courses as obtained based on the optional `userID`.
 *
 * @param key The local storage key where course data is stored.
 * @param userID (Optional) The ID of the user to check which courses they have obtained.
 *
 * @returns React Query's query object containing `data` (array of recent courses with obtained status), `isLoading`, `error`, etc.
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
