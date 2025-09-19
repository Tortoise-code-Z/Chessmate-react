import {
    CHESS_LEVEL,
    DATE_DEFAULT_MSG,
    DEFAULT_COMMENTS_VALUES,
    DESCRIPTION_DEFAULT_MSG,
    USER_DEFAULT_MSG,
} from "../../../../consts/general";
import { AVATAR_DEFAULT_IMAGE } from "../../../../consts/images";
import { ChessLevel, Comments } from "../../../../types/types";
import { asString, isOnVaulues } from "../../../../utils/general";
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
                    alt={asString(comment?.user?.username)}
                    title={asString(comment?.user?.username)}
                    width={AVATAR_DEFAULT_IMAGE.width}
                    height={AVATAR_DEFAULT_IMAGE.height}
                />

                <p className={styles.username}>
                    {asString(comment?.user?.username) || USER_DEFAULT_MSG}
                </p>
                <div>
                    <ChessTitle
                        size="Small"
                        title={isOnVaulues<ChessLevel>(
                            comment?.user?.title,
                            CHESS_LEVEL
                        )}
                    />
                </div>
            </div>
            <p className={styles.createdAt}>
                {asString(comment?.createdAt) || DATE_DEFAULT_MSG}
            </p>
            <p className={styles.commentText}>
                {asString(comment?.text) || DESCRIPTION_DEFAULT_MSG}
            </p>
        </li>
    );
}

export default UserCommentItem;
