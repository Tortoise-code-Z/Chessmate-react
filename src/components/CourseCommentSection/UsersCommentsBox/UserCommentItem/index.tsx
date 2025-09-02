import { DEFAULT_COMMENTS_VALUES } from "../../../../consts/general";
import { AVATAR_DEFAULT_IMAGE } from "../../../../consts/images";
import { Comments } from "../../../../types/types";
import ChessTitle from "../../../ChessTitle";
import FigureImage from "../../../FigureImage";
import styles from "./UserCommentItem.module.css";

type Props = {
    comment: Comments;
};

/**
 * UserCommentItem - Component to render a single user's comment.
 *
 * Displays:
 * - The user's avatar (default image if none provided).
 * - Username and chess title.
 * - The date the comment was created.
 * - The comment text.
 *
 * @param comment - A comment object containing user info, creation date, and text.
 */

function UserCommentItem({ comment }: Props) {
    return (
        <li className={styles.commentItem}>
            <div className={styles.userData}>
                <FigureImage
                    src={AVATAR_DEFAULT_IMAGE.image}
                    alt={comment?.user?.username}
                    title={comment?.user?.username}
                    width={AVATAR_DEFAULT_IMAGE.width}
                    height={AVATAR_DEFAULT_IMAGE.height}
                />

                <p className={styles.username}>
                    {comment?.user?.username ||
                        DEFAULT_COMMENTS_VALUES.user.username}
                </p>
                <div>
                    <ChessTitle size="Small" title={comment?.user?.title} />
                </div>
            </div>
            <p className={styles.createdAt}>
                {comment?.createdAt || DEFAULT_COMMENTS_VALUES.createdAt}
            </p>
            <p className={styles.commentText}>
                {comment?.text || DEFAULT_COMMENTS_VALUES.text}
            </p>
        </li>
    );
}

export default UserCommentItem;
