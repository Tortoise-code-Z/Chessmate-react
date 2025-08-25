import { useQuery } from "@tanstack/react-query";
import { AuthorCurseData, Course, IsObtainedCourse } from "../types/types";
import {
    getAuthors,
    getCourseById,
    getDataLocalStorage,
    getUserObtainedCourses,
} from "../api";

export default function useCourse(
    key: string,
    courseID: number,
    userID?: number
) {
    const queryFunction: () => Promise<
        Course & IsObtainedCourse
    > = async () => {
        try {
            const data = getDataLocalStorage(key);
            console.log(data);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const obtainedCourse = getCourseById(data, courseID);

            const authors = getAuthors(data);

            const courseAuthorsData = obtainedCourse.authors.map(
                (courseAuthorID) =>
                    authors.find((author) => author.id === courseAuthorID) ||
                    ({} as AuthorCurseData)
            );

            const userCourses = getUserObtainedCourses(userID, data);

            return {
                ...obtainedCourse,
                authors: [...courseAuthorsData],
                isObtained: userCourses?.some(
                    (course) => course.courseId === obtainedCourse.curseID
                ),
            };
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["useCourse", courseID, userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
