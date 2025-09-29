import { useParams } from "react-router-dom";
import UserCommentItem from "./UserCommentItem";
import styles from "./UserCommentBox.module.css";
import useCourseComments from "../../../hooks/useCourseComments";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import DataStateWrapper from "../../DataStateWrapperProps";
import SecurityRendering from "../../SecurityRendering";
import { Comments, WarningMsgType } from "../../../types/types";
import { useState } from "react";
import WarningMsg from "../../WarningMsg";
import MsgEmpty from "../../MsgEmpty";
import { asArray, asNumber, isNumber, isString } from "../../../utils/general";
type Props = {};

/**
 * UsersCommentBox - React component to display a list of user comments for a specific course.
 *
 * Features:
 * - Retrieves the course ID from the URL using `useParams`.
 * - Fetches comments using the `useCourseComments` hook.
 * - Handles loading and error states via `DataStateWrapper`.
 * - Uses `SecurityRendering` to validate the integrity of comment data and show warnings if necessary.
 * - Renders a list of `UserCommentItem` components for valid comments.
 * - Displays a fallback message (`MsgEmpty`) if there are no comments.
 *
 * State:
 * - `warningComment` stores warnings about incomplete or missing comment data.
 *
 * @returns JSX element: A styled `ul` with user comments and optional warning messages.
 */

function UsersCommentBox({}: Props) {
    const params = useParams();

    const {
        data: comments,
        isLoading,
        error,
    } = useCourseComments(DATABASE_KEY, asNumber(Number(params.id)));

    const safeData = asArray<Comments>(comments);

    const [warningComment, setWarningComment] = useState<WarningMsgType | null>(
        null
    );

    return (
        <>
            {(warningComment?.emptyMsg || warningComment?.msg) && (
                <WarningMsg
                    msg={
                        warningComment?.emptyMsg
                            ? warningComment.emptyMsg
                            : warningComment.msg
                    }
                />
            )}

            <ul className={styles.commentList}>
                <DataStateWrapper isLoading={isLoading} error={error}>
                    <SecurityRendering<Comments>
                        data={safeData}
                        conditions={safeData?.map(
                            (c) =>
                                isNumber(c?.id) &&
                                isNumber(c?.idCourse) &&
                                (isString(c?.user?.username) ||
                                    isString(c?.text))
                        )}
                        noCriticalConditions={safeData?.map((c) =>
                            isString(c?.createdAt)
                        )}
                        state={{
                            setWarningState: setWarningComment,
                            warningState: warningComment,
                        }}
                        msg="Algunos comentarios (o datos de estos) pueden no haberse recuperado. Estamos trabajando en ello."
                        msgEmpty="No hemos podido recuperar todos los comentarios. Estamos trabajando para solucionarlo."
                        emptyNode={
                            <MsgEmpty
                                msg="Este curso aun no tiene comentarios. ¡Sé el
                                    primero en dejar tu opinión!"
                            />
                        }
                    >
                        {(comment, index, canRender) => {
                            if (!canRender) return null;

                            return (
                                <UserCommentItem
                                    key={asNumber(comment?.id) || index}
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
