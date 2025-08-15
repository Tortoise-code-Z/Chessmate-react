import { Course } from "../../../../types/types";
import AuthorsItem from "./AuthorItem";
import styles from "./Authors.module.css";

type Props = {
    data: Course;
};

function Authors({ data }: Props) {
    console.log(data);
    return (
        <div className={styles.authors}>
            <h3>Autores</h3>
            <div className={styles.authorsItemsContainer}>
                {data.authors.map((a) => (
                    <AuthorsItem author={a} />
                ))}
            </div>
        </div>
    );
}

export default Authors;
