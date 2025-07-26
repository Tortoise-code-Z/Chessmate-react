import { useQuery } from "@tanstack/react-query";
import { BBDD, Course, Level } from "../types/types";
import axios from "axios";

export default function useAllCourses(
    url: string,
    search: string,
    filter: Level | undefined
) {
    const queryFunction: () => Promise<Course[]> = async () => {
        const response = await axios.get<BBDD>(url);

        if (!search && !filter) return response.data.courses;

        if (search && !filter)
            return response.data.courses.filter(
                (c) =>
                    c.title.toLowerCase().includes(search.toLowerCase()) ||
                    c.shortDescription
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    c.level.toLowerCase().includes(search.toLowerCase())
            );

        if (filter && !search)
            return response.data.courses.filter((c) => c.level === filter);

        return [] as Course[];
    };

    return useQuery({
        queryKey: ["allCourses", search, filter],
        queryFn: queryFunction,
    });
}
