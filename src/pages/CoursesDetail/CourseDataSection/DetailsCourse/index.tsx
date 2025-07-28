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
        <div className={[styles.detailsCourse].join(" ")}>
            <h3>{titleContain}</h3>
            <ul className={[styles.themesList].join(" ")}>
                {data?.[typeData]?.themes.map((t) => (
                    <li
                        className={[
                            typeData === "content"
                                ? styles.contentItem
                                : styles.toLearnItem,
                        ].join(" ")}
                        key={t.title}
                    >
                        {t.title}
                    </li>
                ))}
            </ul>
            <div className={[styles.description].join(" ")}>
                {data?.[typeData]?.detailDescription?.map((t) => (
                    <p className={[styles.descriptionItem].join(" ")} key={t}>
                        {t}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default DetailsCourse;
