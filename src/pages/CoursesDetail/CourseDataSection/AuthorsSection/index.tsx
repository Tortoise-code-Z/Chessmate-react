import { Course } from "../../../../types/types";
import Authors from "./Authors";
import styles from "./AuthorsSection.module.css";

type Props = {
    data: Course;
};

function AuthorsSection({ data }: Props) {
    return (
        <div className={styles.authors}>
            <h3>Autores</h3>
            <Authors data={data} />
        </div>
    );
}

export default AuthorsSection;
