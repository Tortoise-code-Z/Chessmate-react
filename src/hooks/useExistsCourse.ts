import { useQuery } from "@tanstack/react-query";
import { getCourses, getDataLocalStorage } from "../api";
import { useEffect } from "react";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";
import { PATHS } from "../consts/paths";

export default function useCourseExists(courseID: number, key: string) {
    const { setPath, setReset, setType, setMsg, setState } =
        useFeedbackMessageStore();

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

    const query = useQuery({
        queryKey: ["existCourse", courseID],
        queryFn: queryFunction,
    });

    useEffect(() => {
        if (query.isSuccess && !query.data) {
            setType("error");
            setMsg("No se ha encontrado el curso que buscas...");
            setState(true);
            setReset(false);
            setPath(`/${PATHS.courses}`);
        }
    }, [query.isSuccess, query.data, setType, setMsg, setState]);

    return query;
}
