import { useParams } from "react-router-dom";
import UserCommentItem from "./UserCommentItem";
import styles from "./UserCommentBox.module.css";
import useCourseComments from "../../../hooks/useCourseComments";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import DataStateWrapper from "../../DataStateWrapperProps";
import SecurityRendering from "../../SecurityRendering";
import { Comments } from "../../../types/types";
import { useState } from "react";
import WarningMsg from "../../WarningMsg";
type Props = {};

/**
 * UsersCommentBox - React component to display a list of user comments for a course.
 *
 * This component:
 * - Fetches comments for a course using `useCourseComments` hook.
 * - Shows a loading or error state using `DataStateWrapper`.
 * - Maps over the comments array and renders a `UserCommentItem` for each comment.
 * - Retrieves the course ID from the URL using `useParams`.
 *
 * @returns A `ul` element containing a list of user comments.
 */

function UsersCommentBox({}: Props) {
    const params = useParams();
    const {
        data: comments,
        isLoading,
        error,
    } = useCourseComments(DATABASE_KEY, Number(params.id));
    const [warningComment, setWarningComment] = useState<string | null>(null);
    console.log(warningComment);

    return (
        <>
            {warningComment && <WarningMsg msg={warningComment} />}
            <ul className={styles.commentList}>
                <DataStateWrapper isLoading={isLoading} error={error}>
                    <SecurityRendering<Comments>
                        data={comments}
                        conditions={comments?.map(
                            (c) => !!c.id && (!!c.user.username || !!c.text)
                        )}
                        state={{
                            setWarningState: setWarningComment,
                            warningState: warningComment,
                        }}
                        msg="Algunos comentarios pueden no haberse recuperado. Estamos trabajando en ello."
                        msgEmpty="No hemos podido recuperar todos los comentarios. Estamos trabajando para solucionarlo."
                        emptyNode={
                            <>
                                <p>
                                    Este curso aun no tiene comentarios. ¡Sé el
                                    primero en dejar tu opinión!
                                </p>
                            </>
                        }
                    >
                        {(comment, index, canRender) => {
                            if (!canRender) return null;

                            return (
                                <UserCommentItem
                                    key={comment.id || index}
                                    comment={comment}
                                />
                            );
                        }}
                    </SecurityRendering>
                </DataStateWrapper>
            </ul>
        </>
    );
}

export default UsersCommentBox;
