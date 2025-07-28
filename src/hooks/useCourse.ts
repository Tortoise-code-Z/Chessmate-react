import { useQuery } from "@tanstack/react-query";
import { BBDD, Course } from "../types/types";
import axios from "axios";

export default function useCourse(url: string, courseID: number) {
    const queryFunction: () => Promise<Course> = async () => {
        const response = await axios.get<BBDD>(url);

        return (
            response.data.courses.find((c) => c.curseID === courseID) ||
            ({} as Course)
        );
    };

    return useQuery({
        queryKey: ["useCourse", courseID],
        queryFn: queryFunction,
    });
}
