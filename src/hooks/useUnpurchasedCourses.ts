import { useQuery } from "@tanstack/react-query";
import { CourseJSON, IsObtainedCourse } from "../types/types";
import {
    deleteKey,
    getDataLocalStorage,
    getUserById,
    getUserObtainedCourses,
    orderedMayorToMenorByKey,
} from "../api";

/**
 * useUnpurchasedCourses - Custom hook to fetch courses that a user has not purchased.
 *
 * Retrieves courses from local storage, ordered by sales in descending order.
 * Optionally filters out courses the specified user already owns.
 * Limits the number of returned courses.
 *
 * @param key - Local storage key where the courses data is stored.
 * @param limit - Maximum number of courses to return.
 * @param userID - Optional ID of the user to filter out already purchased courses.
 * @returns A React Query result object with properties like `data`, `isLoading`, `error`, etc.
 */

export default function useUnpurchasedCourses(
    key: string,
    limit: number | undefined,
    userID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const data = getDataLocalStorage(key);

            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const courses = orderedMayorToMenorByKey(data.courses, "sales");

            if (userID) {
                const userCoursesIds = getUserObtainedCourses(
                    userID,
                    data
                )?.map((item) => {
                    const rest = deleteKey(item, "progress");
                    return rest.courseId;
                }) as number[];

                const finalCourses =
                    userCoursesIds.length > 0
                        ? courses.filter(
                              (c) =>
                                  !userCoursesIds.some((uc) => uc === c.curseID)
                          )
                        : courses;

                return finalCourses.slice(0, limit).map((fc) => ({
                    ...fc,
                    isObtained: false,
                }));
            }

            return courses.slice(0, limit).map((fc) => ({
                ...fc,
                isObtained: false,
            }));
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["toBuyCourses", userID],
        queryFn: queryFunction,
    });
}
