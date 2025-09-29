import ChessTitle from "../../../../../components/ChessTitle";
import FigureImage from "../../../../../components/FigureImage";
import {
    AUTHOR_DEFAULT_MSG,
    DESCRIPTION_DEFAULT_MSG,
    ELO_DEFAULT_MSG,
} from "../../../../../consts/general";
import { DEFAULT_AUTHOR_IMAGE } from "../../../../../consts/images";
import styles from "./AuthorDefault.module.css";

type Props = {};

/**
 * AuthorDefault - React component that displays a placeholder/default author card.
 *
 * Features:
 * - Shows a default author image using `FigureImage`.
 * - Displays default name, title, ELO, and description values when actual author data is unavailable.
 * - Uses `ChessTitle` component with undefined title to show a placeholder.
 * - Styled with CSS modules for layout, typography, and spacing.
 * - Provides a consistent visual fallback for missing author information.
 *
 * Props:
 * - No props are required for this component.
 *
 * @returns JSX.Element: A default author card with placeholder image and text.
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
                    <p className={styles.name}>{AUTHOR_DEFAULT_MSG}</p>
                    <ChessTitle title={undefined} />
                    <p className={styles.elo}>{ELO_DEFAULT_MSG}</p>
                </div>
                <p className={styles.description}>{DESCRIPTION_DEFAULT_MSG}</p>
            </div>
        </div>
    );
}

export default AuthorDefault;
