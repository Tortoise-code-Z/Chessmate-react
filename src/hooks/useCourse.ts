import { useQuery } from "@tanstack/react-query";
import {
    AuthorCurseData,
    BBDD,
    Course,
    CourseJSON,
    IsObtainedCourse,
    ObtainedCourse,
} from "../types/types";

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

            const course =
                data.courses.find((c) => c.curseID === courseID) ||
                ({} as CourseJSON);

            const authorsData = course.authors.map(
                (c) =>
                    data.authors.find((a) => a.id === c) ||
                    ({} as AuthorCurseData)
            );

            const userCourses =
                data.users.find((u) => u.userID === userID)?.courses ||
                ([] as ObtainedCourse[]);

            return {
                ...course,
                authors: [...authorsData],
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === course.curseID
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
