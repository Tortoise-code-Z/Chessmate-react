import { useQuery } from "@tanstack/react-query";
import { BBDD, Comments } from "../types/types";
import axios from "axios";

export default function useCourseComments(url: string, courseID: number) {
    const queryFunction: () => Promise<Comments[]> = async () => {
        const response = await axios.get<BBDD>(url);

        const comments = response.data.comments.map((c) => {
            const userComment = response.data.users.find(
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
    };

    return useQuery({
        queryKey: ["courseComments", courseID],
        queryFn: queryFunction,
    });
}
