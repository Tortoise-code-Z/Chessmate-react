import { useQuery } from "@tanstack/react-query";
import { BBDD, DefualtCourse, Progress, User } from "../types/types";

export default function useDefaultCourses(key: string, userID: number) {
    const queryFunction: () => Promise<
        (DefualtCourse & Progress)[]
    > = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);
            const user = data.users.find((u) => u.userID === userID) as User;
            const defaultCourses = data.defaultCourses.map((df) => {
                return {
                    ...df,
                    progress:
                        user.defaultCourses.find(
                            (udf) => udf.courseId === (df.curseID as number)
                        )?.progress || 0,
                };
            });

            return defaultCourses;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["defaultCourses"],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
