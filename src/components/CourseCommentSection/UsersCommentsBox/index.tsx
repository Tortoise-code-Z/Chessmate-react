import { useParams } from "react-router-dom";
import UserCommentItem from "./UserCommentItem";
import styles from "./UserCommentBox.module.css";
import useCourseComments from "../../../hooks/useCourseComments";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import DataStateWrapper from "../../DataStateWrapperProps";
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

    return (
        <ul className={styles.commentList}>
            <DataStateWrapper isLoading={isLoading} error={error}>
                <>
                    {comments?.map((c) => (
                        <UserCommentItem key={c.id} comment={c} />
                    ))}
                </>
            </DataStateWrapper>
        </ul>
    );
}

export default UsersCommentBox;
