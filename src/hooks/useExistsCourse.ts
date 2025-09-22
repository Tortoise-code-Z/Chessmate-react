import { useQuery } from "@tanstack/react-query";
import { getCourses, getDataLocalStorage } from "../api";
import { useEffect } from "react";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";
import { PATHS } from "../consts/paths";

/**
 * Custom hook to check if a course exists for a user based on local storage data.
 *
 * - Uses React Query's `useQuery` to handle caching, loading, and error states.
 * - Retrieves course data from local storage using the provided `key`.
 * - Checks if a course with the specified `courseID` exists.
 * - Triggers a feedback message via `useFeedbackMessageStore` if the course is not found.
 *
 * @param courseID The ID of the course to check for existence.
 * @param key The local storage key where course data is stored.
 *
 * @returns React Query's query object containing `data` (boolean), `isLoading`, `error`, etc.
 */

export default function useCourseExists(
    courseID: number | undefined,
    key: string
) {
    const { setPath, setReset, setType, setMsg, setState } =
        useFeedbackMessageStore();

    const queryFunction = async (): Promise<boolean> => {
        const data = getDataLocalStorage(key);
        if (!data)
            throw new Error("Ha habido un problema al recuperar los datos...");

        if (!courseID)
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

    return query;
}
