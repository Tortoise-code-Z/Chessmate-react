import { useState } from "react";
import SecurityRendering from "../../../../../components/SecurityRendering";
import {
    AuthorCurseData,
    Course,
    IsObtainedCourse,
} from "../../../../../types/types";
import AuthorsItem from "../AuthorItem";
import styles from "./Authors.module.css";
import WarningMsg from "../../../../../components/WarningMsg";
import AuthorDefault from "../AuthorDefault";

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
    const [authorWarning, setAuthorWarning] = useState<string | null>(null);
    return (
        <>
            {authorWarning && <WarningMsg msg={authorWarning} />}
            <div className={styles.authorsItemsContainer}>
                <SecurityRendering<AuthorCurseData>
                    data={data?.authors}
                    conditions={data?.authors.map(
                        (a) => !!a.name && !!a.elo && !!a.level
                    )}
                    state={{
                        setWarningState: setAuthorWarning,
                        warningState: authorWarning,
                    }}
                    msg="No ha sido posible rescatar la información de algún autor. Pronto lo solucionaremos."
                >
                    {(author, index, canRender) => {
                        if (!canRender)
                            return <AuthorDefault key={author.id || index} />;
                        return (
                            <AuthorsItem
                                key={author.id || index}
                                author={author}
                            />
                        );
                    }}
                </SecurityRendering>
            </div>
        </>
    );
}

export default Authors;
