import { useQuery } from "@tanstack/react-query";
import {
    AuthorCurseData,
    BBDD,
    Course,
    IsObtainedCourse,
    ThemesUserStatesOC,
} from "../types/types";
import {
    getAuthors,
    getCourseById,
    getDataLocalStorage,
    getUserCourseThemes,
    getUserObtainedCourses,
} from "../api";
import {
    ERROR_GET_COURSE_ID_MSG,
    ERROR_GET_COURSE_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_USER_ID_MSG,
} from "../consts/api";

/**
 * useCourseClassroom - Custom React hook for fetching course details along with user theme states for the classroom view.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch course and theme data from local storage.
 * - Retrieves authors associated with the course.
 * - Retrieves user-specific theme completion states for the course.
 * - Adds `isObtained` flag based on whether the user has purchased the course.
 * - Handles errors for missing data, course ID, or user ID.
 *
 * @param key - Local storage key to fetch the database from.
 * @param courseID - ID of the course to fetch.
 * @param userID - ID of the user to fetch theme states for.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing an object with `course` details and `themes` user states.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and stale-time management.
 */

export type useCourseClassroomApi = {
    course: Course & IsObtainedCourse;
    themes: ThemesUserStatesOC[];
};

export default function useCourseClassroom(
    key: string,
    courseID: number | undefined,
    userID: number | undefined
) {
    const queryFunction: () => Promise<useCourseClassroomApi> = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);
            if (!userID) throw new Error(ERROR_GET_USER_ID_MSG);

            const obtainedCourse = getCourseById(data, courseID);
            if (!obtainedCourse) throw new Error(ERROR_GET_COURSE_MSG);

            const authors = getAuthors(data);

            const courseAuthorsData = obtainedCourse.authors.map(
                (courseAuthorID) =>
                    authors.find((author) => author.id === courseAuthorID) ||
                    ({} as AuthorCurseData)
            );

            const userCourses = getUserObtainedCourses(userID, data);

            const userCourseThemes = getUserCourseThemes(
                data,
                userID,
                courseID
            );

            return {
                course: {
                    ...obtainedCourse,
                    authors: [...courseAuthorsData],
                    isObtained: userCourses?.some(
                        (course) => course.courseId === obtainedCourse.courseID
                    ),
                },
                themes: userCourseThemes,
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const query = useQuery({
        queryKey: ["useCourseClassroom", courseID, userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });

    return query;
}
