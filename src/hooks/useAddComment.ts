import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BBDD, Comments, CommentsJSON } from "../types/types";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import {
    deleteKey,
    getDataLocalStorage,
    getTodayDate,
    getUserById,
    orderedMayorToMenorByKey,
    setItemLocalStorage,
} from "../api";

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
            const data = getDataLocalStorage(DATABASE_KEY);

            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const user = getUserById(userID, data);
            if (!user)
                throw new Error("Ha habido un error al recuperar los datos...");

            const orderedComments = orderedMayorToMenorByKey(
                data.comments,
                "id"
            );

            const newIdComment = orderedComments[0].id + 1;

            const date = getTodayDate();

            const newComment: CommentsJSON = {
                id: newIdComment,
                createdAt: date,
                idCourse: courseID,
                text: text,
                idUser: user.userID,
            };

            const newData: BBDD = {
                ...data,
                comments: [...data.comments, { ...newComment }],
            };

            setItemLocalStorage<BBDD>(DATABASE_KEY, newData);

            const rest = deleteKey(newComment, "idUser");

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
