import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON, IsObtainedCourse } from "../types/types";
import {
    getDataLocalStorage,
    getUserObtainedCourses,
    orderedMayorToMenorByKey,
} from "../api";
import { ERROR_GET_COURSES_MSG, ERROR_GET_DATA_MSG } from "../consts/api";

/**
 * useUnpurchasedCourses - Custom React hook for fetching courses not yet purchased by a user.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch unpurchased courses from local storage.
 * - Orders courses by sales in descending order.
 * - Filters out courses already obtained by the specified user (if `userID` is provided).
 * - Applies a limit to the number of courses returned, if specified.
 * - Adds an `isObtained: false` flag to each returned course.
 *
 * @param key The local storage key where course and user data is stored.
 * @param limit Optional maximum number of courses to return.
 * @param userID Optional ID of the user to filter out already obtained courses.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing the list of unpurchased courses.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Refetch function to manually refresh the courses list.
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
                                  !userCoursesIds.some(
                                      (uc) => uc === c.courseID
                                  )
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
