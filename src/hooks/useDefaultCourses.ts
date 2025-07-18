import { useQuery } from "@tanstack/react-query";
import { BBDD, DefualtCourse } from "../types/types";
import axios from "axios";

export default function useDefaultCourses(url: string) {
    const queryFunction: () => Promise<DefualtCourse[]> = async () => {
        const response = await axios.get<BBDD>(url);
        return response.data.defaultCourses;
    };

    return useQuery({
        queryKey: ["defaultCourses"],
        queryFn: queryFunction,
    });
}
