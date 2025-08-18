import { useParams } from "react-router-dom";
import DataStateWrapper from "../../../../components/DataStateWrapperProps";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import useCourseComments from "../../../../hooks/useCourseComments";
import UserCommentItem from "./UserCommentItem";
import styles from "./UserCommentBox.module.css";
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
