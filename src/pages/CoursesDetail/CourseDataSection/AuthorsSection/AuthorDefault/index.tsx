import ChessTitle from "../../../../../components/ChessTitle";
import FigureImage from "../../../../../components/FigureImage";

import { DEFAULT_AUTHOR_IMAGE } from "../../../../../consts/images";
import styles from "./AuthorDefault.module.css";
import { useTranslation } from "react-i18next";

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

function AuthorDefault() {
    const { t } = useTranslation();
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
                    <p className={styles.name}>{t("common:defaults.author")}</p>
                    <ChessTitle title={undefined} />
                    <p className={styles.elo}>{t("common:defaults.elo")}</p>
                </div>
                <p className={styles.description}>{t("common:defaults.description")}</p>
            </div>
        </div>
    );
}

export default AuthorDefault;
