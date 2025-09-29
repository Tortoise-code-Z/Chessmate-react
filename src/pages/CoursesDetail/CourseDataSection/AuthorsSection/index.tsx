import { AnimatedInView } from "../../../../components/AnimatedInView";
import TitleHx from "../../../../components/TitleHx";
import { Course } from "../../../../types/types";
import Authors from "./Authors";
import styles from "./AuthorsSection.module.css";

type Props = {
    data: Course | undefined;
};

/**
 * AuthorsSection - React component that displays the authors of a course.
 *
 * Features:
 * - Renders a heading for the authors section using `TitleHx`.
 * - Displays the list of authors with the `Authors` component.
 * - Animated entry of the section using `AnimatedInView`.
 * - Styled with CSS modules for layout and spacing.
 *
 * Props:
 * - `data`: Course data (`Course | undefined`) containing author information.
 *
 * @returns JSX.Element: A section showing the course authors with animation and proper styling.
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
