import { useQuery } from "@tanstack/react-query";
import { BBDD, ObtainedCourse } from "../types/types";
import axios from "axios";

export default function useUserDataCourses(url: string, idUser: number) {
    const queryFunction: () => Promise<ObtainedCourse[]> = async () => {
        const response = await axios.get<BBDD>(url);
        const user = response.data.users.find((u) => u.userID === idUser);
        return user?.defaultCourses ?? ([] as ObtainedCourse[]);
    };

    return useQuery({
        queryKey: ["userDefaultCourses"],
        queryFn: queryFunction,
    });
}
