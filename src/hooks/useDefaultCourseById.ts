import { useQuery } from "@tanstack/react-query";
import { BBDD, DefualtCourse } from "../types/types";
import axios from "axios";

export default function useDefaultCourseById(url: string, courseID: number) {
    const queryFunction: () => Promise<DefualtCourse> = async () => {
        const response = await axios.get<BBDD>(url);
        return response.data.defaultCourses.find(
            (dc) => dc.curseID === courseID
        ) as DefualtCourse;
    };

    return useQuery({
        queryKey: ["defaultCourseById", courseID],
        queryFn: queryFunction,
    });
}
