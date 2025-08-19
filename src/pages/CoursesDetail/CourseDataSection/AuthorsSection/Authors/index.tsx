import { Course, IsObtainedCourse } from "../../../../../types/types";
import AuthorsItem from "../AuthorItem";
import styles from "./Authors.module.css";

type Props = {
    data: Course & IsObtainedCourse;
};

function Authors({ data }: Props) {
    return (
        <div className={styles.authorsItemsContainer}>
            {data?.authors?.map((a) => (
                <AuthorsItem key={a.id} author={a} />
            ))}
        </div>
    );
}

export default Authors;
