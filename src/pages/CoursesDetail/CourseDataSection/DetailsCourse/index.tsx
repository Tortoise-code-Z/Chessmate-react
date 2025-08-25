import { ReactNode } from "react";
import { Course } from "../../../../types/types";
import styles from "./DetailsCourse.module.css";
import TitleHx from "../../../../components/TitleHx";

type Props = {
    data: Course;
    type: "content" | "learn";
    titleContain: ReactNode;
};

function DetailsCourse({ data, titleContain, type }: Props) {
    const typeData = type === "content" ? "content" : "toLearn";

    return (
        <div className={styles.detailsCourse}>
            <TitleHx level={2}>{titleContain}</TitleHx>

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
