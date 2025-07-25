import { useQuery } from "@tanstack/react-query";
import { BBDD, Course } from "../types/types";
import axios from "axios";

export default function useRecentCourses(url: string) {
    const queryFunction: () => Promise<Course[]> = async () => {
        const response = await axios.get<BBDD>(url);
        const courses = response.data.courses;
        const filteredCourses = courses
            .sort((a, b) => {
                const courseDateA = new Date(a.createdAt).getTime();
                const courseDateB = new Date(b.createdAt).getTime();
                return courseDateB - courseDateA;
            })
            .slice(0, 3);

        return filteredCourses;
    };

    return useQuery({
        queryKey: ["recentCourses"],
        queryFn: queryFunction,
    });
}
