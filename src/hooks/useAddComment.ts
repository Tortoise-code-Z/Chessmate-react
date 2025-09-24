import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BBDD, Comments, CommentsJSON } from "../types/types";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import {
    deleteKey,
    getDataLocalStorage,
    getTodayDate,
    getUserById,
    getUserObtainedCourses,
    orderedMayorToMenorByKey,
    setItemLocalStorage,
} from "../api";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";
import { useProfessorMsgStore } from "./useProfessorMsgStore";
import { useLocation } from "react-router-dom";
import {
    ERROR_GET_COURSE_ID_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_USER_ID_MSG,
    ERROR_GET_USER_MSG,
} from "../consts/api";

type AddCommentApi = {
    courseID: number | undefined;
    userID: number | undefined;
    text: string;
};

/**
 * useAddComment - Custom React hook for adding a comment to a course.
 *
 * This hook:
 * - Uses React Query's `useMutation` to perform the add-comment operation.
 * - Updates local storage and the query cache on success.
 * - Interacts with global state stores:
 *    - `useFeedbackMessageStore` for showing success/error messages.
 *    - `useProfessorMsgStore` for handling professor-related message states.
 * - Validates that the user has purchased the course before allowing a comment.
 *
 * @returns A mutation object from `useMutation` with properties:
 * - `mutate` function to trigger the comment addition.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Handles `onSuccess` and `onError` callbacks automatically.
 */

export function useAddComment() {
    const queryClient = useQueryClient();
    const {
        setState: setFeedbackState,
        setMsg,
        setType,
        setPath,
    } = useFeedbackMessageStore();

    const location = useLocation();

    const { setState, setValue } = useProfessorMsgStore();

    const addComment = async ({
        courseID,
        userID,
        text,
    }: AddCommentApi): Promise<Comments> => {
        try {
            const data = getDataLocalStorage<BBDD>(DATABASE_KEY);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!userID) throw new Error(ERROR_GET_USER_ID_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);

            const user = getUserById(userID, data);
            if (!user) throw new Error(ERROR_GET_USER_MSG);

            const userCourses = getUserObtainedCourses(userID, data);
            const haveCourse = userCourses?.some(
                (course) => course.courseId === courseID
            );

            if (!haveCourse && user) {
                const error = new Error(
                    "El usuario no tiene el curso en compra..."
                );
                error.name = "noCourse";
                throw error;
            }

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
            throw error;
        }
    };

    return useMutation<Comments, Error, AddCommentApi>({
        mutationFn: addComment,
        onSuccess: (data: Comments) => {
            setFeedbackState(true);
            setPath(location.pathname);
            setType("success");
            setMsg("Comentario enviado con éxito");

            queryClient.setQueryData<Comments[]>(
                ["courseComments", data.idCourse],
                (old) => {
                    if (!old) return old;
                    return [...old, data];
                }
            );
        },
        onError: (error) => {
            console.error(error);
            if (error.name === "noCourse") {
                setState(true);
                setValue("cantCommentHasntBuyCourse");
            } else {
                setFeedbackState(true);
                setPath(location.pathname);
                setType("error");
                setMsg("No se ha podido enviar el comentario...");
            }
        },
    });
}
