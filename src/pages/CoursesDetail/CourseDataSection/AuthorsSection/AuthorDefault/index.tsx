import ChessTitle from "../../../../../components/ChessTitle";
import FigureImage from "../../../../../components/FigureImage";
import { DEFAULT_AUTHORS_VALUE } from "../../../../../consts/general";
import { DEFAULT_AUTHOR_IMAGE } from "../../../../../consts/images";
import styles from "./AuthorDefault.module.css";

type Props = {};

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

function AuthorDefault({}: Props) {
    return (
        <div className={styles.authorsItem}>
            <FigureImage
                otherImage={DEFAULT_AUTHOR_IMAGE}
                src={DEFAULT_AUTHOR_IMAGE.image}
                alt={DEFAULT_AUTHOR_IMAGE.alt}
                title={DEFAULT_AUTHOR_IMAGE.alt}
                width={DEFAULT_AUTHOR_IMAGE.width}
                height={DEFAULT_AUTHOR_IMAGE.height}
            />

            <div className={styles.authorItemData}>
                <div className={styles.data}>
                    <p className={styles.name}>{DEFAULT_AUTHORS_VALUE.name}</p>
                    <ChessTitle title={undefined} />
                    <p className={styles.elo}>{DEFAULT_AUTHORS_VALUE.elo}</p>
                </div>
                <p className={styles.description}>
                    {DEFAULT_AUTHORS_VALUE.description}
                </p>
            </div>
        </div>
    );
}

export default AuthorDefault;
