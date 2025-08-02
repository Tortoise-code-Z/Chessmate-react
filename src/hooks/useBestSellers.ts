import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON, IsObtainedCourse } from "../types/types";
import axios from "axios";

export default function useBestSeller(
    url: string,
    limit: number,
    userID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        const response = await axios.get<BBDD>(url);
        const courses = response.data.courses;
        const userCourses = response.data.users.find(
            (u) => u.userID === userID
        )?.courses;
        const filteredCourses = courses
            .sort((a, b) => (b.sales as number) - (a.sales as number))
            .slice(0, limit);
        return filteredCourses.map((fc) => ({
            ...fc,
            isObtained: userCourses?.some((uc) => uc.courseId === fc.curseID),
        }));
    };

    return useQuery({
        queryKey: ["bestSellers", userID],
        queryFn: queryFunction,
    });
}
