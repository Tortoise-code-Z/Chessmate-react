import ChessTitle from "../../../../../components/ChessTitle";
import FigureImage from "../../../../../components/FigureImage";
import { DEFAULT_AUTHORS_VALUE } from "../../../../../consts/general";
import { DEFAULT_AUTHOR_IMAGE } from "../../../../../consts/images";
import { AuthorCurseData } from "../../../../../types/types";
import { getImage, getImageSize } from "../../../../../utils/images";
import styles from "./AuthorsItem.module.css";

type Props = {
    author: AuthorCurseData;
};

/**
 * AuthorsItem component that displays detailed information about a single course author.
 *
 * Features:
 * - `FigureImage`: Displays the author's image with proper sizing and alt/title attributes.
 * - Author data section showing:
 *   - Name
 *   - Level
 *   - ELO rating
 *   - Description
 *
 * Props:
 * - `author` (AuthorCurseData): Object containing the author's details including image, name, level, ELO, and description.
 *
 * @returns JSX element rendering an individual author item with image and detailed information.
 */

function AuthorsItem({ author }: Props) {
    return (
        <div className={styles.authorsItem}>
            <FigureImage
                otherImage={DEFAULT_AUTHOR_IMAGE}
                src={getImage(author?.image, ["authors"])}
                alt={author?.name}
                title={author?.name}
                width={getImageSize(author?.image, "width")}
                height={getImageSize(author?.image, "height")}
            />

            <div className={styles.authorItemData}>
                <div className={styles.data}>
                    <p className={styles.name}>
                        {author?.name || DEFAULT_AUTHORS_VALUE.name}
                    </p>
                    <ChessTitle title={author?.level} />
                    <p className={styles.elo}>
                        {author?.elo
                            ? `${author?.elo} ELO`
                            : DEFAULT_AUTHORS_VALUE.elo}
                    </p>
                </div>
                <p className={styles.description}>
                    {author?.description || DEFAULT_AUTHORS_VALUE.description}
                </p>
            </div>
        </div>
    );
}

export default AuthorsItem;
