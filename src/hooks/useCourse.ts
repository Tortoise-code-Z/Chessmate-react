import { useQuery } from "@tanstack/react-query";
import {
    AuthorCurseData,
    BBDD,
    Course,
    IsObtainedCourse,
} from "../types/types";
import { getCourseById, getUserObtainedCourses } from "../api";

export default function useCourse(
    key: string,
    courseID: number,
    userID?: number
) {
    const queryFunction: () => Promise<
        Course & IsObtainedCourse
    > = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const userObtainedCourse = getCourseById(data, courseID);

            const courseAuthorsData = userObtainedCourse.authors.map(
                (c) =>
                    data.authors.find((a) => a.id === c) ||
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
