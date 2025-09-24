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
 * useCourseClassroom - Custom hook to fetch detailed classroom data for a single course.
 *
 * This hook retrieves a course from local storage, enriches it with its authors' data,
 * and checks if the user has obtained the course.
 *
 * @param key - Local storage key where course and user data is stored.
 * @param courseID - ID of the course to fetch.
 * @param userID - Optional user ID to determine if the user has obtained this course.
 *
 * @returns A React Query object containing:
 *  - `data`: The course with `authors` populated and `isObtained` flag.
 *  - `isLoading`: Whether the query is currently loading.
 *  - `error`: Any error encountered while fetching.
 *  - `refetch`: Function to manually refetch the course data.
 *
 * @remarks
 * - Authors are mapped based on their IDs from the stored data.
 * - `isObtained` is true if the user has already obtained the course.
 * - Data is cached for 5 minutes (`staleTime`) to reduce unnecessary reads.
 *
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
                        (course) => course.courseId === obtainedCourse.curseID
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
