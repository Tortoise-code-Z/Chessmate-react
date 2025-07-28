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
        <div className={[styles].join(" ")}>
            <h3>{titleContain}</h3>
            <ul>
                {data?.[typeData]?.themes.map((t) => (
                    <li key={t.title}>{t.title}</li>
                ))}
            </ul>
            <div>
                {data?.[typeData]?.detailDescription?.map((t) => (
                    <p key={t}>{t}</p>
                ))}
            </div>
        </div>
    );
}

export default DetailsCourse;
