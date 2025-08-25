import { useQuery } from "@tanstack/react-query";
import { getDataLocalStorage, getUserObtainedCourses } from "../api";
import { useEffect } from "react";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";

export default function useHaveObtainedCourse(
    courseID: number,
    userID: number,
    key: string
) {
    const queryFunction = async (): Promise<boolean> => {
        const data = getDataLocalStorage(key);
        if (!data)
            throw new Error("Ha habido un problema al recuperar los datos...");

        const userCourses = getUserObtainedCourses(userID, data);

        const haveCourse = userCourses.some(
            (course) => course.courseId === courseID
        );

        return haveCourse;
    };

    const { setMsg, setState, setType } = useFeedbackMessageStore();

    const query = useQuery({
        queryKey: ["haveCourse", userID, courseID],
        queryFn: queryFunction,
    });

    useEffect(() => {
        if (query.isSuccess && !query.data) {
            setType("error");
            setMsg("No tienes este curso obtenido...");
            setState(true);
        }
    }, [query.isSuccess, query.data, setType, setMsg, setState]);

    return query;
}
