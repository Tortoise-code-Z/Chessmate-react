import { AVATAR_DEFAULT_IMAGE } from "../../../../consts/images";
import { Comments } from "../../../../types/types";
import ChessTitle from "../../../ChessTitle";
import FigureImage from "../../../FigureImage";
import styles from "./UserCommentItem.module.css";

type Props = {
    comment: Comments;
};

function UserCommentItem({ comment }: Props) {
    return (
        <li className={styles.commentItem}>
            <div className={styles.userData}>
                <FigureImage
                    src={AVATAR_DEFAULT_IMAGE.image}
                    alt={comment.user.username}
                    title={comment.user.username}
                    width={AVATAR_DEFAULT_IMAGE.width}
                    height={AVATAR_DEFAULT_IMAGE.height}
                />

                <p className={styles.username}>{comment.user.username}</p>
                <div>
                    <ChessTitle size="Small" title={comment.user.title} />
                </div>
            </div>
            <p className={styles.createdAt}>{comment.createdAt}</p>
            <p className={styles.commentText}>{comment.text}</p>
        </li>
    );
}

export default UserCommentItem;
