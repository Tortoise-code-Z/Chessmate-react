import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON, IsObtainedCourse } from "../types/types";
import {
    getDataLocalStorage,
    getUserObtainedCourses,
    orderedMayorToMenorByKey,
} from "../api";
import { ERROR_GET_COURSES_MSG, ERROR_GET_DATA_MSG } from "../consts/api";

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
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);

            const courses = orderedMayorToMenorByKey(data.courses, "sales");

            if (userID) {
                const userCourses = getUserObtainedCourses(userID, data);
                if (!userCourses) throw new Error(ERROR_GET_COURSES_MSG);

                const userCoursesIds = userCourses.map((item) => {
                    return item.courseId;
                });

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
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["toBuyCourses", userID],
        queryFn: queryFunction,
    });
}
