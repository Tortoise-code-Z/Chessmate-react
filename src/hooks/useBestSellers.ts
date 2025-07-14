import { useQuery } from "@tanstack/react-query";
import { BBDD, Course } from "../types/types";
import axios from "axios";

export default function useBestSeller(url: string) {
    const queryFunction: () => Promise<Course[]> = async () => {
        const response = await axios.get<BBDD>(url);
        const courses = response.data.courses;
        const filteredCourses = courses
            .sort((a, b) => b.sales - a.sales)
            .slice(0, 3);
        return filteredCourses;
    };

    return useQuery({
        queryKey: ["bestSellers"],
        queryFn: queryFunction,
    });
}
