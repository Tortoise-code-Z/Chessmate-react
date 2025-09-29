import {
    CHESS_LEVEL,
    DATE_DEFAULT_MSG,
    DESCRIPTION_DEFAULT_MSG,
    USER_DEFAULT_MSG,
} from "../../../../consts/general";
import { AVATAR_DEFAULT_IMAGE } from "../../../../consts/images";
import { ChessLevel, Comments } from "../../../../types/types";
import { asString, isOnValues } from "../../../../utils/general";
import ChessTitle from "../../../ChessTitle";
import FigureImage from "../../../FigureImage";
import styles from "./UserCommentItem.module.css";

type Props = {
    comment: Comments;
};

/**
 * UserCommentItem - React component to display a single user's comment.
 *
 * Features:
 * - Shows the user's avatar (default if none).
 * - Displays username with a fallback (`USER_DEFAULT_MSG`).
 * - Shows the user's Chess title using `ChessTitle` (validated against `CHESS_LEVEL`).
 * - Displays the comment creation date with a fallback (`DATE_DEFAULT_MSG`).
 * - Displays the comment text with a fallback (`DESCRIPTION_DEFAULT_MSG`).
 *
 * Props:
 * - `comment`: A `Comments` object containing user info, text, and metadata.
 *
 * @returns JSX element: A styled list item with user info and comment content.
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
                        title={isOnValues<ChessLevel>(
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
