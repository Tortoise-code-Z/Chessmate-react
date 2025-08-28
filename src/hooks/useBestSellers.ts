import { useQuery } from "@tanstack/react-query";
import { CourseJSON, IsObtainedCourse } from "../types/types";
import {
    getCourses,
    getDataLocalStorage,
    getUserObtainedCourses,
    orderedMayorToMenorByKey,
} from "../api";

/**
 * Hook that fetches the “Best Seller” courses.
 *
 * - Retrieves course data from local storage using the provided key.
 * - Filters the courses by sales, orders them from highest to lowest, and limits the results.
 * - Checks which courses have been obtained by the user (if userID is provided).
 * - Handles errors and manages caching via React Query.
 *
 * @param key Local storage key where courses are stored.
 * @param limit Maximum number of courses to return.
 * @param userID Optional ID of the user to check obtained courses.
 * @returns Object with React Query states and data: `{ data, isLoading, error, ... }`.
 */

export default function useBestSeller(
    key: string,
    limit: number,
    userID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const data = getDataLocalStorage(key);

            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const courses = getCourses(data);
            const userCourses = getUserObtainedCourses(userID, data);

            const filteredCourses = orderedMayorToMenorByKey(
                courses,
                "sales"
            ).slice(0, limit);

            return filteredCourses.map((course) => ({
                ...course,
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === course.curseID
                ),
            }));
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["bestSellers", userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
