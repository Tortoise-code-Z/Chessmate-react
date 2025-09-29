import { useQuery } from "@tanstack/react-query";
import {
    AuthorCurseData,
    BBDD,
    Course,
    IsObtainedCourse,
    UserDataApi,
} from "../types/types";
import {
    getAuthors,
    getCourseById,
    getDataLocalStorage,
    getUserObtainedCourses,
} from "../api";
import { ERROR_GET_COURSE_ID_MSG, ERROR_GET_DATA_MSG } from "../consts/api";

/**
 * useCourse - Custom React hook for fetching detailed information about a specific course.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch course data from local storage.
 * - Retrieves authors associated with the course.
 * - Adds `isObtained` flag based on whether the user has purchased the course.
 * - Handles errors for missing data or invalid course IDs.
 *
 * @param key - Local storage key to fetch the database from.
 * @param courseID - ID of the course to fetch.
 * @param userData - User data object containing userID and requirement flags.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing the course details with authors and `isObtained` flag.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and stale-time management.
 */

export default function useCourse(
    key: string,
    courseID: number | undefined,
    userData: UserDataApi
) {
    const queryFunction: () => Promise<
        Course & IsObtainedCourse
    > = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);

            const obtainedCourse = getCourseById(data, courseID);
            if (!obtainedCourse) throw new Error(ERROR_GET_COURSE_ID_MSG);

            const authors = getAuthors(data);

            const courseAuthorsData = obtainedCourse.authors.map(
                (courseAuthorID) =>
                    authors.find((author) => author.id === courseAuthorID) ||
                    ({} as AuthorCurseData)
            );

            const userCourses = getUserObtainedCourses(userData?.userID, data);

            return {
                ...obtainedCourse,
                authors: [...courseAuthorsData],
                isObtained: userData.required
                    ? userCourses?.some(
                          (course) =>
                              course.courseId === obtainedCourse.courseID
                      )
                    : false,
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const query = useQuery({
        queryKey: ["useCourse", courseID, userData?.userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });

    return query;
}
