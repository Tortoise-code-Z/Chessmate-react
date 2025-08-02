import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON, IsObtainedCourse } from "../types/types";
import axios from "axios";

export default function useRecentCourses(url: string, userID?: number) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        const response = await axios.get<BBDD>(url);
        const courses = response.data.courses;
        const filteredCourses = courses
            .sort((a, b) => {
                const courseDateA = new Date(a.createdAt).getTime();
                const courseDateB = new Date(b.createdAt).getTime();
                return courseDateB - courseDateA;
            })
            .slice(0, 3);

        const userCourses = response.data.users.find(
            (u) => u.userID === userID
        )?.courses;

        return filteredCourses.map((c) => ({
            ...c,
            isObtained: userCourses?.some((uc) => uc.courseId === c.curseID),
        }));
    };

    return useQuery({
        queryKey: ["recentCourses", userID],
        queryFn: queryFunction,
    });
}
