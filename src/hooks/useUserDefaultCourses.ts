import { useQuery } from "@tanstack/react-query";
import { BBDD, ObtainedCourse } from "../types/types";

export default function useUserDataCourses(key: string, idUser: number) {
    const queryFunction: () => Promise<ObtainedCourse[]> = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);
            const user = data.users.find((u) => u.userID === idUser);
            return user?.defaultCourses ?? ([] as ObtainedCourse[]);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["userDefaultCourses"],
        queryFn: queryFunction,
    });
}
