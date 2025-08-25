import TitleHx from "../../../../components/TitleHx";
import { Course } from "../../../../types/types";
import Authors from "./Authors";
import styles from "./AuthorsSection.module.css";

type Props = {
    data: Course;
};

function AuthorsSection({ data }: Props) {
    return (
        <div className={styles.authors}>
            <TitleHx level={2}>Autores</TitleHx>
            <Authors data={data} />
        </div>
    );
}

export default AuthorsSection;
