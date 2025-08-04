import { useQuery } from "@tanstack/react-query";
import { BBDD, DefualtCourse } from "../types/types";

export default function useDefaultCourses(key: string) {
    const queryFunction: () => Promise<DefualtCourse[]> = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);
            return data.defaultCourses;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["defaultCourses"],
        queryFn: queryFunction,
    });
}
