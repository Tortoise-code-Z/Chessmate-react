import { useQuery } from "@tanstack/react-query";
import { BBDD, UseCourseApiType } from "../types/types";
import { getDefaultCourse, getUserDefaultCourseThemes } from "../api";

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

            const courses = getDefaultCourse(data, courseID);
            const userDefaultCourseThemes = getUserDefaultCourseThemes(
                data,
                userID,
                courseID
            );

            return {
                courses: courses,
                userThemeStates: userDefaultCourseThemes,
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
