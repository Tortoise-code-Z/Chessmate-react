import { useQuery } from "@tanstack/react-query";
import { getDataLocalStorage, getUserObtainedCourses } from "../api";

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

    return useQuery({
        queryKey: ["haveCourse", userID, courseID],
        queryFn: queryFunction,
    });
}
