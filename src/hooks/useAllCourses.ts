import { useQuery } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    FilterOptions,
    IsObtainedCourse,
    UserDataApi,
} from "../types/types";
import {
    getDataLocalStorage,
    getFilteredCourses,
    getSearchedCourses,
    getUserById,
    getUserObtainedCourses,
} from "../api";
import { ERROR_GET_DATA_MSG, ERROR_GET_USER_MSG } from "../consts/api";

/**
 * Custom hook to fetch all courses from local storage, optionally filtered by search or filter criteria.
 *
 * - Uses `@tanstack/react-query` to manage caching and loading states.
 * - Combines user-obtained courses with general course data.
 *
 * @param key - The localStorage key to retrieve the database.
 * @param search - Optional search string to filter courses by title or content.
 * @param filter - Optional filter object to filter courses.
 * @param userID - Optional ID of the user to mark obtained courses.
 * @returns React Query object with `data`, `isLoading`, `error`, etc., containing the list of courses with obtained status.
 */

export default function useAllCourses(
    key: string,
    search: string,
    filter: FilterOptions | undefined,
    userData: UserDataApi
) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);
            if (!data) throw new Error(ERROR_GET_DATA_MSG);

            const user = getUserById(userData?.userID, data);
            if (!user && userData?.userID) throw new Error(ERROR_GET_USER_MSG);

            let courses: (CourseJSON & IsObtainedCourse)[] = [];

            const userCourses = getUserObtainedCourses(userData?.userID, data);

            if (!search && !filter) {
                courses = data.courses;
            }

            if (search && !filter) {
                courses = getSearchedCourses(search, data);
            }

            if (filter && !search) {
                courses = getFilteredCourses(filter, data);
            }

            const finalCourses =
                courses.map((c) => ({
                    ...c,
                    isObtained: userData.required
                        ? userCourses?.some(
                              (userCourse) => userCourse.courseId === c.curseID
                          )
                        : false,
                })) || ([] as (CourseJSON & IsObtainedCourse)[]);

            return finalCourses;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["allCourses", search, filter, userData.userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
