import { AnimatedInView } from "../../../../components/AnimatedInView";
import TitleHx from "../../../../components/TitleHx";
import { Course } from "../../../../types/types";
import Authors from "./Authors";
import styles from "./AuthorsSection.module.css";

type Props = {
    data: Course | undefined;
};

/**
 * AuthorsSection component that displays the authors of a course.
 *
 * Features:
 * - `TitleHx`: Displays the section title "Autores".
 * - `Authors`: Renders a list or details of the course authors.
 *
 * Props:
 * - `data` (Course): The course object containing author information.
 *
 * @returns JSX element rendering the authors section for a course.
 */

function AuthorsSection({ data }: Props) {
    return (
        <AnimatedInView>
            <div className={styles.authors}>
                <TitleHx level={2}>Autores</TitleHx>
                <Authors data={data} />
            </div>
        </AnimatedInView>
    );
}

export default AuthorsSection;
