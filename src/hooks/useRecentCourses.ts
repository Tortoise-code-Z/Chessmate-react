import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON, IsObtainedCourse } from "../types/types";

export default function useRecentCourses(key: string, userID?: number) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const courses = data.courses;
            const filteredCourses = courses
                .sort((a, b) => {
                    const courseDateA = new Date(a.createdAt).getTime();
                    const courseDateB = new Date(b.createdAt).getTime();
                    return courseDateB - courseDateA;
                })
                .slice(0, 3);

            const userCourses = data.users.find(
                (u) => u.userID === userID
            )?.courses;

            return filteredCourses.map((c) => ({
                ...c,
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === c.curseID
                ),
            }));
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["recentCourses", userID],
        queryFn: queryFunction,
    });
}
