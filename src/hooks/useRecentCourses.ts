import { useQuery } from "@tanstack/react-query";
import { CourseJSON, IsObtainedCourse } from "../types/types";
import {
    getCourses,
    getDataLocalStorage,
    getUserObtainedCourses,
} from "../api";

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

export default function useRecentCourses(key: string, userID?: number) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const courses = getCourses(data);

            const filteredCourses = courses
                .sort((a, b) => {
                    const courseDateA = new Date(a.createdAt).getTime();
                    const courseDateB = new Date(b.createdAt).getTime();
                    return courseDateB - courseDateA;
                })
                .slice(0, 3);

            const userCourses = getUserObtainedCourses(userID, data);

            return filteredCourses.map((c) => ({
                ...c,
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === c.curseID
                ),
            }));
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["recentCourses", userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
