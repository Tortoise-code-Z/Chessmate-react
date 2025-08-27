import { useParams } from "react-router-dom";
import UserCommentItem from "./UserCommentItem";
import styles from "./UserCommentBox.module.css";
import useCourseComments from "../../../hooks/useCourseComments";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import DataStateWrapper from "../../DataStateWrapperProps";
type Props = {};

function UsersCommentBox({}: Props) {
    const params = useParams();
    const {
        data: comments,
        isLoading,
        error,
    } = useCourseComments(DATABASE_KEY, Number(params.id));

    return (
        <ul className={[styles.commentList].join(" ")}>
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
