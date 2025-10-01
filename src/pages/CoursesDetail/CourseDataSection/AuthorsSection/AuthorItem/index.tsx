import ChessTitle from "../../../../../components/ChessTitle";
import FigureImage from "../../../../../components/FigureImage";
import {
    AUTHOR_DEFAULT_MSG,
    DESCRIPTION_DEFAULT_MSG,
    ELO_DEFAULT_MSG,
} from "../../../../../consts/general";
import { DEFAULT_AUTHOR_IMAGE } from "../../../../../consts/images";
import { AuthorCurseData } from "../../../../../types/types";
import { asString, isNumber } from "../../../../../utils/general";
import { getImage, getImageSize } from "../../../../../utils/images";
import styles from "./AuthorsItem.module.css";

type Props = {
    author: AuthorCurseData;
};

/**
 * AuthorsItem - React component that displays an individual author's information for a course.
 *
 * Features:
 * - Renders the author's image using `FigureImage` with a fallback default image.
 * - Shows the author's name, title/level using `ChessTitle`, and ELO rating.
 * - Displays the author's description with a default placeholder if missing.
 * - Utilizes utility functions `asString`, `isString`, `getImage`, and `getImageSize` for safe data handling and image sizing.
 * - Styled using CSS modules for layout, spacing, and typography.
 *
 * Props:
 * - `author`: Object containing author details (`AuthorCurseData`), including name, level, ELO, description, and image.
 *
 * @returns JSX.Element: A card displaying an author's image, name, title, ELO, and description.
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
                        {isNumber(author?.elo)
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
