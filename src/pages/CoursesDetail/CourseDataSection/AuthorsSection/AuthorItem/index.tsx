import ChessTitle from "../../../../../components/ChessTitle";
import FigureImage from "../../../../../components/FigureImage";
import {
    AUTHOR_DEFAULT_MSG,
    DESCRIPTION_DEFAULT_MSG,
    ELO_DEFAULT_MSG,
} from "../../../../../consts/general";
import { DEFAULT_AUTHOR_IMAGE } from "../../../../../consts/images";
import { AuthorCurseData } from "../../../../../types/types";
import { asString, isString } from "../../../../../utils/general";
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
                alt={asString(author?.name)}
                title={asString(author?.name)}
                width={getImageSize(author?.image, "width")}
                height={getImageSize(author?.image, "height")}
            />

            <div className={styles.authorItemData}>
                <div className={styles.data}>
                    <p className={styles.name}>
                        {asString(author?.name) || AUTHOR_DEFAULT_MSG}
                    </p>
                    <ChessTitle title={author?.level} />
                    <p className={styles.elo}>
                        {isString(author?.elo)
                            ? `${author.elo} ELO`
                            : ELO_DEFAULT_MSG}
                    </p>
                </div>
                <p className={styles.description}>
                    {asString(author?.description) || DESCRIPTION_DEFAULT_MSG}
                </p>
            </div>
        </div>
    );
}

export default AuthorsItem;
