import { CHESS_LEVEL } from "../../../../consts/general";
import { AVATAR_DEFAULT_IMAGE } from "../../../../consts/images";
import { ChessLevel, Comments } from "../../../../types/types";
import { asString, isOnValues } from "../../../../utils/general";
import ChessTitle from "../../../ChessTitle";
import FigureImage from "../../../FigureImage";
import styles from "./UserCommentItem.module.css";
import { useTranslation } from "react-i18next";

type Props = {
    comment: Comments;
};

/**
 * UserCommentItem - React component to display a single user's comment.
 *
 * Features:
 * - Shows the user's avatar (default if none).
 * - Displays username with a fallback (`common:defaults.user`).
 * - Shows the user's Chess title using `ChessTitle` (validated against `CHESS_LEVEL`).
 * - Displays the comment creation date with a fallback (`common:defaults.date`).
 * - Displays the comment text with a fallback (`common:defaults.description`).
 *
 * Props:
 * - `comment`: A `Comments` object containing user info, text, and metadata.
 *
 * @returns JSX element: A styled list item with user info and comment content.
 */

function UserCommentItem({ comment }: Props) {
    const { t } = useTranslation();
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
                    {asString(comment?.user?.username) || t("common:defaults.user")}
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
                {asString(comment?.createdAt) || t("common:defaults.date")}
            </p>
            <p className={styles.commentText}>
                {asString(comment?.text) || t("common:defaults.description")}
            </p>
        </li>
    );
}

export default UserCommentItem;
