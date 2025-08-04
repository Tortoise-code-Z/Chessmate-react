import { useQuery } from "@tanstack/react-query";
import { BBDD, DefualtCourse } from "../types/types";

export default function useDefaultCourseById(key: string, courseID: number) {
    const queryFunction: () => Promise<DefualtCourse> = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);
            return (
                data.defaultCourses.find((dc) => dc.curseID === courseID) ||
                ({} as DefualtCourse)
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["defaultCourseById", courseID],
        queryFn: queryFunction,
    });
}
