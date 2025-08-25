import { useQuery } from "@tanstack/react-query";
import { getCourses, getDataLocalStorage } from "../api";

export default function useCourseExists(courseID: number, key: string) {
    const queryFunction = async (): Promise<boolean> => {
        const data = getDataLocalStorage(key);
        if (!data)
            throw new Error("Ha habido un problema al recuperar los datos...");

        const courses = getCourses(data);

        const existsCourse = courses.some(
            (course) => course.curseID === courseID
        );

        return existsCourse;
    };

    return useQuery({
        queryKey: ["existCourse", courseID],
        queryFn: queryFunction,
    });
}
