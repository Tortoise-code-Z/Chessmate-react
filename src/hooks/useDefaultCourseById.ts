import { useQuery } from "@tanstack/react-query";
import {
    BBDD,
    DefualtCourse,
    ThemesUserStates,
    UseCourseApiType,
} from "../types/types";

export default function useDefaultCourseById(
    key: string,
    courseID: number,
    userID: number
) {
    const queryFunction: () => Promise<UseCourseApiType> = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);
            const courses =
                data.defaultCourses.find((dc) => dc.curseID === courseID) ||
                ({} as DefualtCourse);
            const userThemesStates =
                data.users
                    .find((u) => u.userID === userID)
                    ?.defaultCourses.find((dc) => dc.courseId === courseID)
                    ?.themes || ([] as ThemesUserStates[]);

            return {
                courses: courses,
                userThemeStates: userThemesStates,
            };
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery<UseCourseApiType>({
        queryKey: ["defaultCourseById", courseID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
