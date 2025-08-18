import { useQuery } from "@tanstack/react-query";
import { AuthorCurseData, Course, IsObtainedCourse } from "../types/types";
import {
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
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const userObtainedCourse = getCourseById(data, courseID);

            const courseAuthorsData = userObtainedCourse.authors.map(
                (courseAuthorID) =>
                    data.authors.find((a) => a.id === courseAuthorID) ||
                    ({} as AuthorCurseData)
            );

            const userCourses = getUserObtainedCourses(userID, data);

            return {
                ...userObtainedCourse,
                authors: [...courseAuthorsData],
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === userObtainedCourse.curseID
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
