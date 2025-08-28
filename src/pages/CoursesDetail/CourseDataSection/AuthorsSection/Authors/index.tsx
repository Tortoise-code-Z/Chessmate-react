import { Course, IsObtainedCourse } from "../../../../../types/types";
import AuthorsItem from "../AuthorItem";
import styles from "./Authors.module.css";

type Props = {
    data: Course & IsObtainedCourse;
};

/**
 * Authors component that renders a list of course authors.
 *
 * Features:
 * - Maps through the `authors` array of a course and renders an `AuthorsItem` for each author.
 *
 * Props:
 * - `data` (Course & IsObtainedCourse): Course object containing author information and obtained course status.
 *
 * @returns JSX element rendering a container with all authors of the course.
 */

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
