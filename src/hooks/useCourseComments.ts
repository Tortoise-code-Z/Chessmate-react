import { useQuery } from "@tanstack/react-query";
import { Comments } from "../types/types";
import { deleteKey, getDataLocalStorage, getUserById } from "../api";

export default function useCourseComments(key: string, courseID: number) {
    const queryFunction: () => Promise<Comments[]> = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const comments = data.comments.map((c) => {
                const user = getUserById(c.idUser, data);
                if (!user)
                    throw new Error(
                        "Ha habido un error al recuperar los datos..."
                    );
                const rest = deleteKey(c, "idUser");

                return { ...rest, user };
            });

            // Ordered by time, more recents to minor recents
            return comments
                .filter((c) => c.idCourse === courseID)
                .sort((a, b) => {
                    const bData = new Date(b.createdAt).getTime();
                    const aData = new Date(a.createdAt).getTime();
                    return aData - bData;
                });
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["courseComments", courseID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
