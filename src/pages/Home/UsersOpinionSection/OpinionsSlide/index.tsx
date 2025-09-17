import { Opinion } from "../../../../types/types";
import { asNumber, asString } from "../../../../utils/general";
import styles from "./OpinionsSlide.module.css";

type Props = {
    data: Opinion;
};

/**
 * OpinionsSlide component that displays a single student opinion.
 *
 * Features:
 * - Shows user information including username, title, and ELO rating if available.
 * - Displays the user's opinion text in quotes.
 *
 * Props:
 * - `data` (Opinion): Object containing the opinion text and user details.
 *
 * @returns JSX element rendering a single opinion slide for use in a carousel.
 */

function OpinionsSlide({ data }: Props) {
    return (
        <div className={styles.opinionContainer}>
            <div className={styles.userData}>
                <p className={styles.username}>
                    {asString(data?.user?.username) || "Usuario"}
                </p>
                {asString(data?.user?.title) && (
                    <p className={styles.userTitle}>{data.user.title}</p>
                )}
                {asNumber(data?.user?.elo) && (
                    <p className={styles.userElo}>{data.user.elo} ELO</p>
                )}
            </div>
            <p className={styles.userOpinion}>"{asString(data?.text)}"</p>
        </div>
    );
}

export default OpinionsSlide;
