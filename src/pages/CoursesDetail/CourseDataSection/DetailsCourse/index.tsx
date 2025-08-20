import { ReactNode } from "react";
import { Course } from "../../../../types/types";
import styles from "./DetailsCourse.module.css";

type Props = {
    data: Course;
    type: "content" | "learn";
    titleContain: ReactNode;
};

function DetailsCourse({ data, titleContain, type }: Props) {
    const typeData = type === "content" ? "content" : "toLearn";

    return (
        <div className={styles.detailsCourse}>
            <h3>{titleContain}</h3>
            {/* Themes / Content list */}
            <ul className={styles.themesList}>
                {data?.[typeData]?.themes.map((t) => (
                    <li
                        className={
                            typeData === "content"
                                ? styles.contentItem
                                : styles.toLearnItem
                        }
                        key={t.id}
                    >
                        {t.title}
                    </li>
                ))}
            </ul>
            {/* Course description */}
            <div className={styles.description}>
                {data?.[typeData]?.detailDescription?.map((t) => (
                    <p className={styles.descriptionItem} key={t}>
                        {t}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default DetailsCourse;
