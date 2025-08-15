import { Opinion } from "../../../../types/types";
import styles from "./OpinionsSlide.module.css";

type Props = {
    data: Opinion;
};

function OpinionsSlide({ data }: Props) {
    return (
        <div className={styles.opinionContainer}>
            <div className={styles.userData}>
                <p className={styles.username}>{data.user.username}</p>
                {data.user.title && (
                    <p className={styles.userTitle}>{data.user.title}</p>
                )}
                {data.user.elo && (
                    <p className={styles.userElo}>{data.user.elo} ELO</p>
                )}
            </div>
            <p className={styles.userOpinion}>"{data.text}"</p>
        </div>
    );
}

export default OpinionsSlide;
