import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BBDD, Comments, CommentsJSON } from "../types/types";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import { getUserById } from "../api";

type AddCommentApi = {
    courseID: number;
    userID: number;
    text: string;
};

export function useAddComment() {
    const queryClient = useQueryClient();

    const addComment = async ({
        courseID,
        userID,
        text,
    }: AddCommentApi): Promise<Comments> => {
        try {
            const getData = localStorage.getItem(DATABASE_KEY);

            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const user = getUserById(userID, data);

            const idComment: number =
                data.comments.sort((a, b) => b.id - a.id)[0].id + 1;

            const date = new Date()
                .toISOString()
                .split("T")[0]
                .split("-")
                .reverse()
                .join("-");

            const newComment: CommentsJSON = {
                id: idComment,
                createdAt: date,
                idCourse: courseID,
                text: text,
                idUser: user.userID,
            };

            const newData: BBDD = {
                ...data,
                comments: [...data.comments, { ...newComment }],
            };

            localStorage.setItem(DATABASE_KEY, JSON.stringify(newData));

            const { idUser, ...rest } = newComment;
            return { ...rest, user };
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useMutation<Comments, Error, AddCommentApi>({
        mutationFn: addComment,
        onSuccess: (data: Comments) => {
            queryClient.setQueryData<Comments[]>(
                ["courseComments", data.idCourse],
                (old) => {
                    if (!old) return old;
                    return [...old, data];
                }
            );
        },
        onError: () => {},
    });
}
