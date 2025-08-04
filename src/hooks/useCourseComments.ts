import { useQuery } from "@tanstack/react-query";
import { BBDD, Comments } from "../types/types";

export default function useCourseComments(key: string, courseID: number) {
    const queryFunction: () => Promise<Comments[]> = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const comments = data.comments.map((c) => {
                const userComment = data.users.find(
                    (u) => u.userID === c.idUser
                );

                const user = {
                    userID: userComment?.userID as number,
                    username: userComment?.username as string,
                };

                const { idUser, ...rest } = c;

                return { ...rest, user };
            });

            return comments.filter((c) => c.idCourse === courseID);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["courseComments", courseID],
        queryFn: queryFunction,
    });
}
