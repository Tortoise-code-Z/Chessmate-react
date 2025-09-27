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
 * useCourse - Custom hook to fetch detailed information about a single course.
 *
 * This hook retrieves course data from local storage, enriches it with author details,
 * and optionally marks whether the course has been obtained by a specific user.
 *
 * @param key - The local storage key where course and user data is stored.
 * @param courseID - The ID of the course to fetch.
 * @param userID - Optional user ID to determine if the user has obtained this course.
 *
 * @returns A React Query object containing:
 *  - `data`: The course object with `authors` populated and `isObtained` flag.
 *  - `isLoading`: Whether the query is currently loading.
 *  - `error`: Any error encountered while fetching.
 *  - `refetch`: Function to manually refetch the course data.
 *
 * @remarks
 * - Fetches course authors from the stored data and maps them into `authors`.
 * - Sets `isObtained` to `true` if the user has already obtained the course.
 * - Cached for 5 minutes (`staleTime`) to avoid unnecessary reads.
 *
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
