import { useQuery } from "@tanstack/react-query";
import { DefualtCourse, Progress } from "../types/types";
import { getDataLocalStorage, getUserById } from "../api";

export default function useDefaultCourses(key: string, userID: number) {
    const queryFunction: () => Promise<
        (DefualtCourse & Progress)[]
    > = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const user = getUserById(userID, data);

            if (!user)
                throw new Error("Ha habido un error al recuperar los datos...");

            const defaultCourses = data.defaultCourses.map((df) => {
                return {
                    ...df,
                    progress:
                        user.defaultCourses.find(
                            (udf) => udf.courseId === df.curseID
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
    });
}
