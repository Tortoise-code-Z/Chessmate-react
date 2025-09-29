import {
    OPINION_DEFAULT_MSG,
    USER_DEFAULT_MSG,
} from "../../../../consts/general";
import { Opinion } from "../../../../types/types";
import { asNumber, asString } from "../../../../utils/general";
import styles from "./OpinionsSlide.module.css";

type Props = {
    data: Opinion;
};

/**
 * OpinionsSlide - React component that renders a single student opinion/testimonial.
 *
 * Features:
 * - Displays user information including username, title, and ELO rating when available.
 * - Shows the opinion text or falls back to `OPINION_DEFAULT_MSG` if missing.
 * - Safely handles undefined or invalid values using `asString` and `asNumber` utilities.
 * - Structured with styled CSS classes for user data and opinion text.
 *
 * Props:
 * - `data`: Opinion object containing user information and testimonial text (`Opinion`).
 *
 * @returns JSX.Element: A styled opinion slide displaying user info and their testimonial.
 */

function OpinionsSlide({ data }: Props) {
    return (
        <div className={styles.opinionContainer}>
            <div className={styles.userData}>
                <p className={styles.username}>
                    {asString(data?.user?.username) || USER_DEFAULT_MSG}
                </p>
                {asString(data?.user?.title) && (
                    <p className={styles.userTitle}>{data.user.title}</p>
                )}
                {asNumber(data?.user?.elo) && (
                    <p className={styles.userElo}>{data.user.elo} ELO</p>
                )}
            </div>
            <p className={styles.userOpinion}>
                "{asString(data?.text) || OPINION_DEFAULT_MSG}"
            </p>
        </div>
    );
}

export default OpinionsSlide;
