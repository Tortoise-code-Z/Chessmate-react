import { Opinion } from "../../../../types/types";
import styles from "./OpinionsSlide.module.css";

type Props = {
    data: Opinion;
};

function OpinionsSlide({ data }: Props) {
    return (
        <div className={[styles.opinionContainer].join(" ")}>
            <div className={[styles.userData].join(" ")}>
                <p className={[styles.username].join(" ")}>
                    {data.user.username}
                </p>
                {data.user.title && (
                    <p className={[styles.userTitle].join(" ")}>
                        {data.user.title}
                    </p>
                )}
                {data.user.elo && (
                    <p className={[styles.userElo].join(" ")}>
                        {data.user.elo} ELO
                    </p>
                )}
            </div>
            <p className={[styles.userOpinion].join(" ")}>"{data.text}"</p>
        </div>
    );
}

export default OpinionsSlide;
